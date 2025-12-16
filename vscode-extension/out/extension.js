"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
const axios_1 = __importDefault(require("axios"));
const fs = __importStar(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
function activate(context) {
    console.log('Congratulations, your extension "openkombai-vscode" is now active!');
    let disposable = vscode.commands.registerCommand('openkombai.generate', async () => {
        // 1. Get Configuration
        const config = vscode.workspace.getConfiguration('openkombai');
        const backendUrl = config.get('backendUrl') || 'http://localhost:8000';
        // 2. Open File Dialog
        const fileUri = await vscode.window.showOpenDialog({
            canSelectMany: false,
            openLabel: 'Generate Code',
            filters: {
                'Images': ['png', 'jpg', 'jpeg', 'webp']
            }
        });
        if (!fileUri || fileUri.length === 0) {
            return;
        }
        const imagePath = fileUri[0].fsPath;
        // 3. Show Progress
        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "OpenKombai: Generating Code...",
            cancellable: false
        }, async (progress, token) => {
            try {
                // 4. Prepare Upload
                const formData = new form_data_1.default();
                formData.append('file', fs.createReadStream(imagePath));
                // 5. Call Backend
                const response = await axios_1.default.post(`${backendUrl}/generate`, formData, {
                    headers: {
                        ...formData.getHeaders()
                    },
                    timeout: 600000 // 10 minutes timeout for local LLMs
                });
                const { code, description } = response.data;
                // 6. Open Result
                const doc = await vscode.workspace.openTextDocument({
                    content: code,
                    language: 'typescriptreact' // .tsx
                });
                await vscode.window.showTextDocument(doc);
                vscode.window.showInformationMessage('Code generated successfully!');
            }
            catch (error) {
                console.error(error);
                const msg = error.response?.data?.detail || error.message;
                vscode.window.showErrorMessage(`OpenKombai Error: ${msg}`);
            }
        });
    });
    context.subscriptions.push(disposable);
}
function deactivate() { }
//# sourceMappingURL=extension.js.map