# Pierre Lapolla - AI Portfolio

A modern portfolio website built with Next.js and TypeScript, featuring an interactive "AI Twin" assistant powered by
Mistral AI.

## Features

* **Live site:** [pierrelapolla.com](https://pierrelapolla.com)
* **AI assistant:**
    * A custom assistant that answers questions based on Pierre's profile.
    * Streaming responses powered by the Vercel AI SDK.
* **Sections:**
    * Hero
    * Certifications
    * Projects
    * Experience
    * Skills
    * AI Assistant
    * Contact
* **Localization:**
    * Language toggle between English and French
* **Styling:**
    * shadcn/ui components
    * Tailwind CSS
    * Light/dark mode toggle

## Tech stack

* **Framework:** Next.js 16 (App Router)
* **Language:** TypeScript
* **AI provider:** Mistral AI via Vercel AI SDK
* **Hosting:** Vercel
* **Styling:** Tailwind CSS + shadcn/ui
* **Package manager/runtime:** Bun

## Prerequisites

Ensure you have the following installed on your local machine:

* [**Bun**](https://bun.sh/)

## Installation & setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PierreLapolla/portfolio
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Environment variables:**
   Create a `.env.local` file in the root directory and add your API keys (e.g., Mistral AI API Key):
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
    bun run dev
```

OR

**Production build:**
To start the application:
```bash
    bun run build && bun run start
```


Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
