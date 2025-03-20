# CLAUDE.md - Assistant Guide for checkthevibe.dev

## Project Structure
- `index.html` - Main HTML file for the GitHub Pages site
- `css/style.css` - Styling and branding
- `js/main.js` - JavaScript with Twitch integration
- `.nojekyll` - Prevents GitHub Pages from using Jekyll processing

## Project Commands
- Test locally: `python -m http.server` or `npx serve`
- Deploy: Push changes to the main branch for GitHub Pages deployment

## Code Style Guidelines
- **HTML**: Semantic elements, descriptive class names 
- **CSS**: Use CSS variables defined in `:root` for colors and styling
- **JavaScript**: ES6 syntax, function-based organization
- **Naming**: kebab-case for CSS classes, camelCase for JavaScript variables/functions
- **Indentation**: 2 spaces
- **Twitch Integration**: Always include parent domains in the embed

## Twitch Implementation
- Embed API: `https://embed.twitch.tv/embed/v1.js`
- Default channel: 'twitchpresents' (configurable via URL parameter `?channel=channelname`)
- Parent domains: ["checkthevibe.dev", "localhost"] must be included for embed to work

## Branding
- Primary color: #6441a5 (Twitch purple)
- Secondary color: #0e9dd9 (Blue)
- Font stack: 'Arial', sans-serif

## Common Tasks
- To change the default Twitch channel: Edit the `defaultChannel` variable in `js/main.js`
- To update site content: Modify the respective sections in `index.html`
- To adjust styling: Update CSS variables in `css/style.css`