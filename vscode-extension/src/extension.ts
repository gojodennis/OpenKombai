import * as vscode from 'vscode';
import axios from 'axios';
import * as fs from 'fs';
import FormData from 'form-data';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "openkombai-vscode" is now active!');

    let disposable = vscode.commands.registerCommand('openkombai.generate', async () => {
        // 1. Get Configuration
        const config = vscode.workspace.getConfiguration('openkombai');
        const backendUrl = config.get<string>('backendUrl') || 'http://localhost:8000';

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
                const formData = new FormData();
                formData.append('file', fs.createReadStream(imagePath));

                // 5. Call Backend
                const response = await axios.post(`${backendUrl}/generate`, formData, {
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

            } catch (error: any) {
                console.error(error);
                const msg = error.response?.data?.detail || error.message;
                vscode.window.showErrorMessage(`OpenKombai Error: ${msg}`);
            }
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
