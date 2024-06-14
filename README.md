# gpt-engineer-setup-guide

### Prompt for GPT-Engineer

**Description:**
This setup guide will enable a GPT Engineer project using remote development in VS Code, SSH access, and necessary dependencies including BentoML, LangChain, and Tiledesk. The UI will support dark mode, blue mode, and yellow mode themes. The project will also include API, SDK, plugin systems, and deployment features for cross-platform support (iOS, Android, third-party). Additionally, integrate Tiledesk with a chat UI and AI-powered chatbot builder, configured to use models like LLaMA 3, GPT-NeoX, GPT-J, Code LLaMA, OPT, BLOOM, Baichuan, and CodeGen.

### Required VS Code Extensions:
- Remote Development
- Python
- Jupyter
- Pylance
- AI Toolkit (optional for AI assistance)

### Python Packages:
- torch
- transformers
- flask
- pandas
- numpy
- bentoml
- langchain

### Open-Source Tools:
- LLaMA 3
- Docker

### GUI Extension:
- Git Graph

### Tiledesk Integration:
- [Tiledesk Dashboard](https://github.com/Tiledesk/tiledesk-dashboard)
- [Tiledesk Full-Stack](https://github.com/Tiledesk)

### Terminal Commands:

1. **Install Remote Development Extension Pack:**
   ```bash
   code --install-extension ms-vscode-remote.vscode-remote-extensionpack
   ```

2. **Create SSH Config:**
   ```bash
   touch ~/.ssh/config
   chmod 600 path-to-your-ssh-key
   nano ~/.ssh/config
   ```

   Add the following to `~/.ssh/config`:
   ```plaintext
   Host my-remote-server
     HostName your-server-address
     User your-username
     IdentityFile path-to-your-ssh-key
   ```

3. **Connect to Remote Server:**
   - Open VS Code
   - Open Command Palette (`F1` or `Ctrl+Shift+P`)
   - Type `Remote-SSH: Connect to Host...`
   - Select `my-remote-server`

4. **Set Up Python Environment on Remote Server:**
   ```bash
   ssh your-username@your-server-address
   sudo apt update
   sudo apt install python3-pip
   pip3 install torch transformers flask pandas numpy bentoml langchain
   ```

5. **Clone Your GPT Engineer Project:**
   ```bash
   git clone your-project-repo-url
   cd your-project-directory
   ```

6. **Run Your Project:**
   - Open the project in VS Code
   - Install recommended extensions (Python, Jupyter, Pylance)
   - Open a terminal in VS Code and run your main script:
     ```bash
     python main.py
     ```

7. **AI Assistant Extension Recommendation:**
   - Install the AI Toolkit extension for enhanced AI support and productivity:
     ```bash
     code --install-extension AI-Toolkit
     ```

### User Interface Customization:

**HTML Structure:**
Create a basic HTML structure with a menu for switching themes and deployment options.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GPT Engineer Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body class="dark-mode">
    <header>
        <nav>
            <ul>
                <li><button onclick="setTheme('dark-mode')">Dark Mode</button></li>
                <li><button onclick="setTheme('blue-mode')">Blue Mode</button></li>
                <li><button onclick="setTheme('yellow-mode')">Yellow Mode</button></li>
                <li><button onclick="showMenu('deployment')">Deployment</button></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Welcome to GPT Engineer Dashboard</h1>
        <div id="tiledesk-container"></div>
        <div id="deployment-menu" style="display:none;">
            <h2>Deployment Options</h2>
            <ul>
                <li><button onclick="deploy('api')">API</button></li>
                <li><button onclick="deploy('sdk')">SDK</button></li>
                <li><button onclick="deploy('plugin')">Plugin</button></li>
                <li><button onclick="deploy('file')">File</button></li>
                <li><button onclick="deploy('download')">Download</button></li>
                <li><button onclick="deploy('ios')">iOS</button></li>
                <li><button onclick="deploy('android')">Android</button></li>
                <li><button onclick="deploy('third-party')">Third-Party</button></li>
            </ul>
        </div>
    </main>
    <script src="scripts.js"></script>
</body>
</html>
```

**CSS for Themes:**
```css
/* styles.css */

/* Dark mode with yellow text */
body.dark-mode {
  background-color: #121212;
  color: #FFD700;
}

/* Blue mode with yellow text */
body.blue-mode {
  background-color: #0000FF;
  color: #FFD700;
}

/* Yellow mode with blue text */
body.yellow-mode {
  background-color: #FFFF00;
  color: #0000FF;
}

header {
  padding: 1rem;
  background: #333;
  color: #fff;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav button {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
}

#deployment-menu {
  margin-top: 20px;
}
```

**JavaScript for Theme Switching and Deployment Menu:**
```javascript
// scripts.js

function setTheme(themeName) {
  document.body.className = themeName;
}

function showMenu(menuName) {
  document.getElementById('deployment-menu').style.display = 'block';
}

function deploy(option) {
  alert('Deploying: ' + option);
  // Implement deployment logic here
}
```

### Tiledesk Integration

**Add Tiledesk Widget to Your HTML:**
```html
<!-- Add this inside the body where you want the Tiledesk chat widget to appear -->
<div id="tiledesk-container"></div>

<script>
  (function(d, s, id) {
    var js, tjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://widget.tiledesk.com/v4/launch.js';
    tjs.parentNode.insertBefore(js, tjs);
  }(document, 'script', 'tiledesk-jssdk'));
</script>
```

### Full-Stack Tiledesk Integration

Refer to the Tiledesk repositories for full-stack integration:
- [Tiledesk Dashboard](https://github.com/Tiledesk/tiledesk-dashboard)
- [Tiledesk Full-Stack](https://github.com/Tiledesk)

### AI-Powered Chatbot Builder

Integrate models like LLaMA 3, GPT-NeoX, GPT-J, Code LLaMA, OPT, BLOOM, Baichuan, and CodeGen to build AI-powered chatbots.

**Example Configuration:**
```javascript
// Configure your AI model integration in your main script
const { GPTNeoX, GPTJ, CodeLLaMA, OPT, BLOOM, Baichuan, CodeGen } = require('your-ai-library');

function setupChatbot(model) {
  // Initialize and configure the chosen model
  const chatbot = new model({
    apiKey: 'your-api-key',
    modelParameters: { /* model-specific parameters */ }
  });

  chatbot.start();
}

// Example usage
setupChatbot(GPTNeoX);
```

By following these steps, you can set up and run your GPT Engineer project using remote development in VS Code, ensuring efficient use of remote server resources while maintaining a productive and customizable local development environment. This includes API, SDK, and plugin systems for extensive functionality and customization.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/gpt-engineer-setup-guide.git
cd gpt-engineer-setup-guide
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
