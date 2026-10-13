# Portfolio

Static site: plain HTML, CSS and JavaScript. No build step.

## Edit content

- Projects and the "More projects" table: `js/projects.js`
- About, experience, education, skills, contact: `index.html`
- Images: `assets/img/`
- Colours and fonts: the `:root` block at the top of `css/style.css`

## Preview locally

    python3 -m http.server 4173

Then open http://localhost:4173

## Publish on GitHub Pages

1. Create a public repository named `LucasBoonde.github.io`.
2. Push the contents of this folder to the `main` branch.
3. The site is live at https://lucasboonde.github.io within a minute or two.
