import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Upload, Code, Play, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined)[]) {
  return twMerge(clsx(inputs));
}

function App() {
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [code, setCode] = useState<string>('// Generated code will appear here...');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLowSpec, setIsLowSpec] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleGenerate = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    setCode('// Generating... (This may take a minute on local hardware)');

    try {
      const formData = new FormData();
      formData.append('file', image);

      if (isLowSpec) {
        formData.append('vision_model', 'moondream');
        formData.append('code_model', 'qwen2.5-coder:1.5b');
      } else {
        formData.append('vision_model', 'llama3.2-vision');
        formData.append('code_model', 'qwen2.5-coder');
      }

      // Point to Python Backend
      const response = await axios.post('http://localhost:8000/generate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCode(response.data.code);
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to generate code. Is the backend running?');
      setCode('// Error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-neutral-950 text-white font-sans">
      {/* Header */}
      <header className="border-b border-neutral-800 p-4 flex items-center justify-between bg-neutral-900">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Code size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">OpenKombai</h1>
          <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded ml-2">v0.1.0-alpha</span>
        </div>
        <div className="flex gap-2">
          <a href="https://github.com/yourusername/open-kombai" target="_blank" className="text-sm text-neutral-400 hover:text-white transition-colors">GitHub</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Left Panel: Upload & Config */}
        <div className="w-1/3 border-r border-neutral-800 p-6 flex flex-col gap-6 bg-neutral-900/50">
          <div>
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Upload size={18} /> Source Image
            </h2>
            <p className="text-sm text-neutral-400 mb-4">
              Upload a screenshot of the UI you want to clone.
            </p>

            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-neutral-700 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-500/5 transition-all group overflow-hidden relative">
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-neutral-500 group-hover:text-blue-400">
                  <Upload className="w-10 h-10 mb-3" />
                  <p className="mb-2 text-sm"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs">PNG, JPG or WEBP</p>
                </div>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!image || loading}
            className={cn(
              "w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all",
              !image ? "bg-neutral-800 text-neutral-500 cursor-not-allowed" :
                loading ? "bg-blue-600/50 text-blue-200 cursor-wait" :
                  "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/20"
            )}
          >
            {loading ? (
              <><Loader2 className="animate-spin" /> Generating Code...</>
            ) : (
              <><Play size={20} /> Generate React Code</>
            )}
          </button>

          <div className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg border border-neutral-800">
            <div className="flex items-center gap-2">
              <div className={cn("p-1.5 rounded", isLowSpec ? "bg-amber-500/10 text-amber-500" : "bg-neutral-800 text-neutral-400")}>
                {/* Icon */}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-neutral-200">Low Resource Mode</span>
                <span className="text-[10px] text-neutral-500">Use lighter models (Moondream + Qwen 1.5B)</span>
              </div>
            </div>
            <button
              onClick={() => setIsLowSpec(!isLowSpec)}
              className={cn("w-10 h-6 rounded-full relative transition-colors", isLowSpec ? "bg-amber-600" : "bg-neutral-700")}
            >
              <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white transition-all", isLowSpec ? "left-5" : "left-1")} />
            </button>
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-200 text-sm flex items-start gap-2">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              {error}
            </div>
          )}

          <div className="mt-auto text-xs text-neutral-500">
            Powered by Local LLMs (Ollama). No data leaves your device.
          </div>
        </div>

        {/* Right Panel: Editor */}
        <div className="flex-1 flex flex-col bg-[#1e1e1e]">
          <div className="border-b border-neutral-800 p-2 px-4 flex items-center justify-between bg-neutral-900 text-sm">
            <span className="flex items-center gap-2 text-neutral-300">
              GeneratedComponent.tsx
            </span>
            <button
              className="text-xs bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded flex items-center gap-1 transition-colors"
              onClick={() => navigator.clipboard.writeText(code)}
            >
              Copy Code
            </button>
          </div>

          <Editor
            height="100%"
            defaultLanguage="typescript"
            language="typescript" // Force TS highlighting for React
            theme="vs-dark"
            value={code}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              padding: { top: 20 },
              fontFamily: 'JetBrains Mono, monospace',
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
