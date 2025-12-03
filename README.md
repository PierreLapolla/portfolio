# Pierre Lapolla - AI Portfolio

A modern portfolio website built with Next.js and TypeScript, featuring an interactive "AI Twin" chatbot powered by
Mistral AI.

## Features

* **Live site:** [pierrelapolla.com](https://pierrelapolla.com) (Chatbot may output an error due to Mistral AI's free tier limits)
* **AI chat interface:** 
  * A custom chatbot that answers questions based on Pierre's profile.
  * Streaming responses (not working on live site because of Amplify)
* **Tech stack:**
    * **Framework:** Next.js 14 (App router)
    * **Language:** TypeScript
    * **AI provider:** Mistral AI via Vercel AI SDK
    * **Hosting/backend:** AWS Amplify
    * **Styling:** AWS Amplify UI Components
* **Responsive design:** UI made of custom components (AppShell, ChatUI)

* **Future features:**
    * Add a "Contact" page
    * Add a "Projects" page
    * Add more information about Pierre, music, games, parc attractions, etc.
    * Implement a custom backend for the chatbot using FastAPI

## Prerequisites

Ensure you have the following installed on your local machine:

* [**Node.js**](https://nodejs.org/en/download)
* [**npm**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation & setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PierreLapolla/portfolio
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment variables:**
   Create a `.env.local` file in the root directory based on `.env.template`.
   ```bash
   cp .env.template .env.local
   ```

   Open `.env.local` and add your specific API keys (e.g., Mistral AI API Key):
   ```env
   MISTRAL_API_KEY=your_api_key_here
   ```

4. **Data configuration:**
   The AI is driven by text files located in the `data/` folder:
    * `data/pierre_profile.txt`: Contains the knowledge base/bio for the AI.
    * `data/system_prompt.txt`: Contains the instructions for the AI's behavior.

## Running the project

**Development server:**
To start the application in development mode with hot-reloading:
```bash
    npm run dev
```

OR

**Production build:**
To start the application:
```bash
    npm run build && npm run start
```


Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.