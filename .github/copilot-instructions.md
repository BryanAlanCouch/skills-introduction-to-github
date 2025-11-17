# GitHub Copilot Instructions for IdentAgent.me

## Project Overview

IdentAgent.me is a professional digital identity platform and portfolio showcase. This repository serves as both a learning resource for GitHub best practices and a production-ready template for creating professional GitHub profiles.

## Technology Stack

- **Frontend**: HTML5, JavaScript (ES6+), Three.js for 3D visualizations
- **Styling**: Tailwind CSS
- **Version Control**: Git and GitHub
- **CI/CD**: GitHub Actions
- **Documentation**: Markdown
- **Deployment**: GitHub Pages

## Code Style and Best Practices

### General Guidelines

- Write clean, maintainable, and well-documented code
- Use clear and descriptive variable and function names
- Follow existing code patterns and conventions in the repository
- Ensure all files end with a newline character
- Keep code DRY (Don't Repeat Yourself)

### JavaScript

- Use modern ES6+ syntax (const/let, arrow functions, template literals)
- Add comments for complex logic but avoid obvious comments
- Handle errors gracefully
- Optimize for performance, especially with Three.js rendering

### HTML

- Use semantic HTML5 elements
- Ensure accessibility (ARIA labels, alt text for images)
- Maintain consistent indentation (4 spaces)
- Follow mobile-first responsive design principles

### CSS/Tailwind

- Utilize Tailwind CSS utility classes where appropriate
- Keep custom CSS minimal and organized
- Ensure responsive design works across all device sizes
- Follow the existing gradient and color scheme

## Documentation Standards

- Use Markdown for all documentation files
- Follow Markdown best practices and linting rules (see `.markdownlint.json`)
- Keep README.md up-to-date with any significant changes
- Include code examples in documentation where helpful
- Ensure all links are valid (checked by `.markdown-link-check.json`)

## Security Considerations

- Never commit sensitive information (API keys, passwords, tokens)
- Follow security best practices for web applications
- Keep dependencies up-to-date (managed by Dependabot)
- Validate and sanitize user inputs if applicable
- Review security policy in SECURITY.md

## Testing and Quality Assurance

- Test code changes across different browsers and devices
- Verify responsive design at various breakpoints
- Ensure 3D visualizations perform well
- Check that GitHub Actions workflows pass
- Validate accessibility standards

## Contributing Guidelines

- Follow the guidelines outlined in CONTRIBUTING.md
- Keep pull requests focused on a single feature or fix
- Write clear commit messages describing the what and why
- Update relevant documentation with code changes
- Adhere to the Code of Conduct (CODE_OF_CONDUCT.md)

## File Organization

- Place workflow files in `.github/workflows/`
- Store images in the `images/` directory
- Keep documentation files in the root directory
- Follow the existing directory structure

## Best Practices for This Repository

- Maintain the professional and polished presentation
- Ensure all external links remain functional
- Keep the learning resource aspect clear and accessible
- Update CHANGELOG.md for significant changes
- Preserve the balance between being a template and a learning tool
