# OpenKombai

> **Free, Local, Open Source AI Frontend Generator.** (Alternative to Kombai)

OpenKombai is an open-source tool that turns **Screenshots** and **Design Files** into production-ready **React + Tailwind CSS** code using *local* AI models. No API keys required. No cloud costs. 100% Private.

## 🚀 Features

- **Zero Cost**: Built on top of local LLMs (Llama 3.2 Vision, Qwen 2.5 Coder) via Ollama.
- **Private & Secure**: Your designs never leave your machine.
- **Framework Support**: Generates React + Tailwind CSS + Lucide Icons.
- **Studio UI**: A simple React-based interface to drag-and-drop screenshots and preview code.

## 🛠️ Tech Stack

- **Backend**: Python (FastAPI) + Pillow + Ollama
- **Frontend**: React + Vite + Shadcn UI
- **AI Engine**: [Ollama](https://ollama.com/) (Must be installed separately)

## 📦 Getting Started

### Prerequisites

1.  **Install Ollama**: [Download here](https://ollama.com/)
2.  **Pull Models**:
    ```bash
    ollama run llama3.2-vision
    ollama run qwen2.5-coder
    ```
3.  **Python 3.10+** and **Node.js 18+**

### Installation

1.  **Clone the repo**
    ```bash
    git clone https://github.com/yourusername/open-kombai.git
    cd open-kombai
    ```

2.  **Start Backend**
    ```bash
    cd backend
    pip install -r requirements.txt
    fastapi dev main.py
    ```

3.  **Start Frontend**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
