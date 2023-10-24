# Adam Leis - Dynamic Resume

This project is designed to do a few things:

1. provide a practice topic for new (to me) technologies, e.g., AstroJS
2. easily generate resume PDFs when job-hunting is a thing
3. use smart tech to handle the "work" of managing a resume

This readme (and Astro project) comes from [uzzii-21's astr-portfolio](https://github.com/uzzii-21/astro-portfolio/blob/master/README.md).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   ├── assets
│   │   ├── fonts
|   |   └── images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── home/
|   |   └── general/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── data/
│   ├── layouts/
│   |   |── Layout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── peojects.astro
│   |   ├── index.astro
│   ├── styles/
│   |   |── custom-styles.css
│   |   |── fonts.css
│   |   └── styles.css
│   ├── types/
│   ├── utils/
├── package.json
└── ...
```

Astro looks for .astro or .md files in the src/pages/ directory. Each page is exposed as a route based on its file name.

There's nothing special about src/components/, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the public/assets directory.

Your personal data would be go on src/data directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                       |
| -------------------- | -------------------------------------------- |
| npm install          | Installs dependencies                        |
| npm run dev          | Starts local dev server at localhost:3000    |
| npm run build        | Build your production site to ./dist/        |
| npm run preview      | Preview your build locally, before deploying |
| npm run astro ...    | Run CLI commands like astro add, astro check |
| npm run astro --help | Get help using the Astro CLI                 |
