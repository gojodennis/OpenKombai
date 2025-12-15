from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import ollama
import io
from PIL import Image

app = FastAPI(title="OpenKombai API", description="Local AI Backend for Frontend Generation")

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GenerateResponse(BaseModel):
    code: str
    description: str

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "OpenKombai Backend"}

@app.post("/generate", response_model=GenerateResponse)
async def generate_code(file: UploadFile = File(...)):
    """
    Takes an uploaded image (screenshot) and generates React code using local LLMs.
    Pipeline:
    1. Vision Model (llama3.2-vision) -> Describes the UI
    2. Code Model (qwen2.5-coder) -> Writes the React Code
    """
    
    # 1. Validate Image
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents))
        
        # Convert image to bytes for Ollama
        img_byte_arr = io.BytesIO()
        image.save(img_byte_arr, format=image.format)
        img_bytes = img_byte_arr.getvalue()

        # 2. Vision Step: Describe the UI
        print("👀 Analyzing image with Llama 3.2 Vision...")
        vision_response = ollama.chat(
            model='llama3.2-vision',
            messages=[{
                'role': 'user',
                'content': 'Describe this UI in technical detail. List the layout components (header, sidebar, main content), specific colors (approximate hex), typography style, and any interactive elements (buttons, inputs). Be precise.',
                'images': [img_bytes]
            }]
        )
        description = vision_response['message']['content']
        print(f"✅ Description generated: {description[:100]}...")

        # 3. Code Step: Generate React Code
        print("💻 Generating code with Qwen 2.5 Coder...")
        prompt = f"""
        You are an expert Frontend Developer. 
        Build the React component described below.
        
        Stack: React (Functional Components), Tailwind CSS, Lucide React (for icons).
        
        UI Description:
        {description}
        
        Requirements:
        - Use Tailwind for ALL styling.
        - Use Lucide React for icons (import {{ IconName }} from 'lucide-react').
        - Output ONLY the code. Do not wrap in markdown code blocks like ```jsx. Just the code.
        - Ensure the code is a valid, standalone React component named 'GeneratedComponent'.
        """

        code_response = ollama.chat(
            model='qwen2.5-coder',
            messages=[{'role': 'user', 'content': prompt}]
        )
        code = code_response['message']['content']
        
        # Clean up markdown if present
        code = code.replace("```jsx", "").replace("```tsx", "").replace("```", "")
        
        print("✅ Code generated!")

        return GenerateResponse(code=code, description=description)

    except Exception as e:
        print(f"❌ Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
