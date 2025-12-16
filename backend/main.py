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
async def generate_code(
    file: UploadFile = File(...),
    vision_model: str = "moondream",
    code_model: str = "qwen2.5-coder:1.5b"
):
    """
    Takes an uploaded image (screenshot) and generates React code using local LLMs.
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
        print(f"👀 Analyzing image with {vision_model}...")
        
        # Read vision system prompt from file
        try:
            with open("prompts/vision_system.md", "r", encoding="utf-8") as f:
                vision_system = f.read().strip()
        except FileNotFoundError:
            print("⚠️ Vision system prompt file not found. Using default.")
            vision_system = "You are an expert UI/UX Designer with a keen eye for technical detail. accurately describe layout, colors, and typography."

        vision_user_content = "Describe this UI in technical detail. List the layout components (header, sidebar, main content), specific colors (approximate hex), typography style, and any interactive elements (buttons, inputs). Be precise."
        
        vision_response = ollama.chat(
            model=vision_model,
            messages=[
                {'role': 'system', 'content': vision_system},
                {
                    'role': 'user',
                    'content': vision_user_content,
                    'images': [img_bytes]
                }
            ]
        )
        description = vision_response['message']['content']
        print(f"✅ Description generated: {description[:100]}...")

        # 3. Code Step: Generate React Code
        print(f"💻 Generating code with {code_model}...")
        
        # Read code generation system prompt from file
        try:
            with open("prompts/code_gen_system.md", "r", encoding="utf-8") as f:
                system_prompt = f.read().strip()
        except FileNotFoundError:
             print("⚠️ Code generation system prompt file not found. Using default.")
             system_prompt = "You are an expert Frontend Developer. Build the React component described by the user."

        user_prompt = f"""UI Description:
{description}"""

        code_response = ollama.chat(
            model=code_model,
            messages=[
                {'role': 'system', 'content': system_prompt},
                {'role': 'user', 'content': user_prompt}
            ]
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
