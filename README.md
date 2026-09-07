# PixelBrewer

The source for [pixelbrewer.dev](https://pixelbrewer.dev), my personal corner of the internet.

PixelBrewer is where I write about software, share projects, document things I am learning, and keep a small gallery of life away from the keyboard.

## What's Here

- **Writing** — notes, articles, and things I learn along the way
- **Projects** — software and game development projects I am building
- **About** — a little about me and what I am interested in
- **Gallery** — kendo, skiing, coffee, cats, and other non-code things

## Tech Stack

The site is built with:

- Astro
- TypeScript
- Tailwind CSS
- Sass
- Astro Content Collections
- Markdown

The site is statically generated and served by Nginx on a DigitalOcean server.

## Repository Structure

The Astro application lives in the `web` directory.

```text
.
├── .github/
│   └── workflows/
├── web/
│   ├── public/
│   ├── src/
│   ├── astro.config.mjs
│   ├── package.json
│   └── tsconfig.json
├── AGENTS.md
└── README.md
```

## Development

Clone the repository:

```bash
git clone https://github.com/PixelBrewer/pixel-brewer-studios.git
cd pixel-brewer-studios/web
```

Install dependencies:

```bash
npm install
```

Start the Astro development server:

```bash
npm run dev
```

Astro will print the local development URL in the terminal.

## Production Build

Create a production build with:

```bash
npm run build
```

The generated static site is written to:

```text
web/dist/
```

To preview the production build locally:

```bash
npm run preview
```

When using `npm run preview`, remember that Astro serves the most recent production build from `dist`. Run `npm run build` again after making changes if you want to preview the latest version.

## Content

Writing, projects, and gallery entries are managed through Astro Content Collections.

Content lives under:

```text
web/src/content/
```

The site currently uses collections for:

```text
writing/
projects/
gallery/
```

Writing and project content is primarily authored in Markdown and committed directly to Git.

My general writing workflow is intentionally simple:

```text
Write → Commit → Push → Deploy
```

## Deployment

Pushes to `main` trigger the GitHub Actions deployment workflow.

The deployment process:

1. Checks out the repository
2. Installs the Node.js dependencies
3. Builds the Astro site
4. Connects to the production server over SSH
5. Clears the previous static site files
6. Deploys the contents of `web/dist/`

The production site is served by Nginx from:

```text
/var/www/pixelbrewer
```

## Live Site

You can visit PixelBrewer at:

**[pixelbrewer.dev](https://pixelbrewer.dev)**

## About PixelBrewer

PixelBrewer is the developer identity I use for my personal projects and writing.

The name combines two things I enjoy:

- **Pixel** — games, graphics, computers, and building things on a screen
- **Brewer** — coffee, tinkering, and the process of making something carefully

This site is intended to be less of a traditional portfolio and more of an ongoing record of the things I build, learn, and find interesting.
