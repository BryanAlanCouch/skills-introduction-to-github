# Development Guide for IdentAgent.me

This guide will help you set up your development environment to work on IdentAgent.me.

## Prerequisites

- Git installed on your system
- A code editor (VS Code recommended)
- GitHub account
- Basic knowledge of HTML, CSS, and JavaScript

## Setting Up Your Development Environment

### 1. Clone the Repository

```bash
git clone https://github.com/BryanAlanCouch/skills-introduction-to-github.git
cd skills-introduction-to-github
```

### 2. Open in Your Code Editor

#### Using VS Code

Open your code editor from the command line:

```bash
code .
```

This command opens the current directory in Visual Studio Code.

### 3. GitHub Copilot Setup (Optional)

If you have GitHub Copilot enabled, you can configure the agent sessions view location for better integration with "The Builder" features.

To configure the GitHub Copilot agent sessions view:

```text
vscode://settings/chat.agentSessionsViewLocation
```

Copy and paste this URI in your browser or VS Code to access the setting directly.

Alternatively, you can configure it manually in VS Code:

1. Open VS Code Settings (Ctrl+, or Cmd+,)
2. Search for "chat.agentSessionsViewLocation"
3. Choose your preferred location for the agent sessions view

## Development Workflow

### Making Changes

1. Create a new branch for your feature:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes to the codebase

3. Test your changes by opening `index.html` in a web browser

4. Commit your changes:

   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

5. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request on GitHub

### Testing Your Changes

Since this is a static HTML site, you can test your changes by:

1. **Local Testing**: Open `index.html` directly in your browser
2. **Live Server**: Use a VS Code extension like "Live Server" for auto-refresh
3. **GitHub Pages Preview**: Push to a branch and enable GitHub Pages for that branch

### Code Quality Checks

The repository includes automated quality checks that run on every commit:

- **Markdown Linting**: Ensures documentation follows best practices
- **Link Checking**: Validates all links in markdown files
- **Security Scanning**: Checks for vulnerabilities

Run these checks locally before committing:

```bash
# Check markdown files
npm install -g markdownlint-cli
markdownlint *.md

# Check links (if you have markdown-link-check installed)
npm install -g markdown-link-check
markdown-link-check README.md
```

## Project Structure

```text
.
├── .github/              # GitHub configuration and workflows
│   ├── workflows/        # GitHub Actions workflows
│   ├── steps/           # Tutorial step files
│   └── ISSUE_TEMPLATE/  # Issue templates
├── images/              # Image assets
├── index.html           # Main landing page
├── *.html               # Additional hub pages
├── README.md            # Project documentation
├── CONTRIBUTING.md      # Contribution guidelines
├── DEPLOYMENT.md        # Deployment instructions
├── DEVELOPMENT.md       # This file
└── LICENSE              # MIT License
```

## Common Tasks

### Updating the Landing Page

Edit `index.html` to modify the main landing page content, styling, or functionality.

### Adding New Hub Pages

1. Create a new HTML file following the naming convention (e.g., `new_hub.html`)
2. Use existing hub files as templates
3. Update navigation if needed

### Updating Documentation

- **README.md**: Main project documentation
- **CONTRIBUTING.md**: Guidelines for contributors
- **DEPLOYMENT.md**: Deployment instructions
- **DEVELOPMENT.md**: Development setup (this file)

### Working with Three.js Visualizations

The landing page includes Three.js for 3D visualizations. When working with this:

1. Test performance across different devices
2. Ensure responsive behavior
3. Optimize loading times
4. Handle errors gracefully

## Debugging

### Common Issues

**Issue**: Changes not reflecting in browser

- **Solution**: Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- **Solution**: Clear browser cache

**Issue**: Markdown linting errors

- **Solution**: Check `.markdownlint.json` for rules
- **Solution**: Use a markdown linter in your editor

**Issue**: GitHub Actions failing

- **Solution**: Check the Actions tab for detailed logs
- **Solution**: Ensure you're following the code style guidelines

## Additional Resources

- [GitHub Docs](https://docs.github.com)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [GitHub Copilot Documentation](https://docs.github.com/copilot)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Getting Help

If you need help:

1. Check existing [Issues](https://github.com/BryanAlanCouch/skills-introduction-to-github/issues)
2. Review the [CONTRIBUTING.md](CONTRIBUTING.md) guide
3. Open a new issue with details about your problem
4. Ask in the Discussions section

## Next Steps

After setting up your development environment:

1. ✅ Review the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines
2. ✅ Explore the codebase and understand the structure
3. ✅ Try making a small change and testing it
4. ✅ Read about [GitHub Flow](https://guides.github.com/introduction/flow/)
5. ✅ Start contributing!

---

Happy coding! 🚀
