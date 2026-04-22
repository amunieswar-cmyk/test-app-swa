# Test App for Azure Static Web Apps

A simple, responsive test application deployed to Azure Static Web Apps.

## Features

- ✨ Modern, responsive UI
- 🌙 Dark mode support
- 📱 Mobile-friendly design
- ⚡ Fast loading and performance
- 🚀 Ready for Azure Static Web Apps deployment

## Deployment

### Prerequisites
- Azure account
- GitHub account (for CI/CD)
- GitHub CLI or Git command line

### Option 1: Deploy via GitHub Actions (Recommended)

1. **Create a GitHub repository** and push this code
2. **In Azure Portal:**
   - Create a Static Web Apps resource
   - Connect your GitHub repository
   - GitHub Actions will automatically create workflows
3. **Deploy:** Push changes to your main branch

### Option 2: Deploy via Azure CLI

```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Deploy to production
swa deploy
```

### Option 3: Manual Deployment via Azure Storage

1. Build/prepare files (already ready to deploy)
2. Upload to your Static Web Apps storage
3. Files will be immediately available at your URL

## File Structure

```
test-app/
├── index.html              # Main HTML file
├── styles.css              # Stylesheet
├── script.js               # JavaScript
├── staticwebapp.config.json # Azure SWA configuration
└── README.md              # This file
```

## Local Testing

Simply open `index.html` in your browser or use:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server
```

Then navigate to `http://localhost:8000`

## Configuration

The `staticwebapp.config.json` file contains:
- Routing rules
- Navigation fallback for SPA support
- MIME type definitions

## Support

For issues with Azure Static Web Apps, visit:
https://docs.microsoft.com/en-us/azure/static-web-apps/

---

**Created:** April 22, 2026  
**Platform:** Azure Static Web Apps  
**Status:** Ready for Deployment
