# Check The Vibe

This repository contains the source code for [checkthevibe.dev](https://checkthevibe.dev), a GitHub Pages site that provides branded content and Twitch stream integration.

## Features

- Live Twitch stream embedding
- Responsive, branded design with custom CSS
- Smooth scrolling and modern UI
- Mobile-friendly interface

## Development

### Local Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/checkthevibe.dev.git
   cd checkthevibe.dev
   ```

2. Install the development server requirements:
   ```
   pip install livereload
   ```

3. Start the development server:
   ```
   python server.py
   ```
   
   This will automatically:
   - Start a server on port 8000
   - Open your browser to http://localhost:8000
   - Watch for file changes and auto-reload the browser

### GitHub Codespaces

This repository is configured for GitHub Codespaces development with automatic setup:

1. Open the repository in GitHub Codespaces
2. The development environment will automatically:
   - Install required dependencies
   - Start the development server
   - Open a browser preview window
3. Make changes and see them reflect instantly

### Customization

- **Twitch Channel**: Change the default Twitch channel in `js/main.js`
- **Colors and Styling**: Modify the CSS variables in `css/style.css`
- **Content**: Update the HTML in `index.html`

## Deployment

The site is automatically deployed through GitHub Pages when changes are pushed to the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.