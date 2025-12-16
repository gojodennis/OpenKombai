import { X, Save, Settings } from 'lucide-react';
import { cn } from '../App'; // Importing cn from App for now, ideally should be a util

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    visionModel: string;
    setVisionModel: (model: string) => void;
    codeModel: string;
    setCodeModel: (model: string) => void;
}

export function SettingsModal({
    isOpen,
    onClose,
    visionModel,
    setVisionModel,
    codeModel,
    setCodeModel
}: SettingsModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-800/50">
                    <div className="flex items-center gap-2">
                        <Settings size={18} className="text-neutral-400" />
                        <h2 className="font-semibold text-white">Model Settings</h2>
                    </div>
                    <button onClick={onClose} className="text-neutral-400 hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">

                    {/* Vision Model Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-neutral-300">Vision Model (See UI)</label>
                        <div className="grid grid-cols-1 gap-2">
                            <button
                                onClick={() => setVisionModel('llama3.2-vision')}
                                className={cn(
                                    "p-3 rounded-xl border text-left transition-all",
                                    visionModel === 'llama3.2-vision'
                                        ? "bg-blue-600/10 border-blue-600/50 text-blue-100"
                                        : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-neutral-800/80"
                                )}
                            >
                                <div className="font-medium">Llama 3.2 Vision</div>
                                <div className="text-xs opacity-70">Best Quality • Recommended • 7B params</div>
                            </button>

                            <button
                                onClick={() => setVisionModel('moondream')}
                                className={cn(
                                    "p-3 rounded-xl border text-left transition-all",
                                    visionModel === 'moondream'
                                        ? "bg-blue-600/10 border-blue-600/50 text-blue-100"
                                        : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-neutral-800/80"
                                )}
                            >
                                <div className="font-medium">Moondream</div>
                                <div className="text-xs opacity-70">Fastest • Low Resource • 1.6B params</div>
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-px bg-neutral-800" />

                    {/* Code Model Selection */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-neutral-300">Code Generation Model</label>
                        <div className="grid grid-cols-1 gap-2">
                            <button
                                onClick={() => setCodeModel('qwen2.5-coder')}
                                className={cn(
                                    "p-3 rounded-xl border text-left transition-all",
                                    codeModel === 'qwen2.5-coder'
                                        ? "bg-blue-600/10 border-blue-600/50 text-blue-100"
                                        : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-neutral-800/80"
                                )}
                            >
                                <div className="font-medium">Qwen 2.5 Coder (7B)</div>
                                <div className="text-xs opacity-70">Best Accuracy • Recommended</div>
                            </button>

                            <button
                                onClick={() => setCodeModel('qwen2.5-coder:1.5b')}
                                className={cn(
                                    "p-3 rounded-xl border text-left transition-all",
                                    codeModel === 'qwen2.5-coder:1.5b'
                                        ? "bg-blue-600/10 border-blue-600/50 text-blue-100"
                                        : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:bg-neutral-800/80"
                                )}
                            >
                                <div className="font-medium">Qwen 2.5 Coder (1.5B)</div>
                                <div className="text-xs opacity-70">Fast • Low Memory Usage</div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-neutral-800 bg-neutral-900 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2"
                    >
                        <Save size={16} /> Done
                    </button>
                </div>

            </div>
        </div>
    );
}
