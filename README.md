# MMISI Frontend (Trainees)

This is frontend code for Murray & MacDonald Insurance Seervices, Inc. new website, built using [Dative Frontend Mix](https://github.com/dative/dative-frontend-mix).

## Requirements

This tool requires Node v16 (I recommend using [NVM](https://github.com/nvm-sh/nvm)), or [NVM for Windows](https://github.com/coreybutler/nvm-windows).

## Getting Started

1. Clone this repo locally and install the dependencies:

```bash
git clone https://github.com/dative/mmisi-frontend.git
cd mmisi-frontend && npm install
```

### Commands

#### npm run dev

This will fire up the local development, with live reload. It will run on [`http://localhost:3030`](http://localhost:3030)

#### npm run build

This will build the production version of the site inside the `public` directory.

### Program Guidelines

Please review the [Program Guidelines](https://github.com/dative/mmisi-frontend/blob/main/GUIDELINES.md) to learn about our program format and code of conduct.

The design for the new website was created in [Figma and can be found here](https://www.figma.com/file/8pzqHnSLkdZocdYIMOc47C/Design-Docs-v3-Frontend?node-id=0%3A1)

Resources can be found under [Github Discussion](https://github.com/dative/mmisi-frontend/discussions). Please take your time to review all the topics.

### Tasks

-[x] Create a fork of this repo
-[x] Clone your fork to your local dev environment
-[x] Install the dependencies and run the npm run dev command without issues
-[x] Confirm access to the design Figma file
-[ ] Review the implementation approach with Lead Developer
-[ ] Create website "shell" layout on _generic_page_layout.twig
-[ ] Review and define webfonts
-[ ] Review and define colors
-[ ] Review and define containers
-[ ] Implement _site_header.twig component
-[ ] Implement _site_footer.twig component
-[ ] Implement typography.twig page
-[ ] Make sure non-photo images are either inline SVG or URL encoded when used in CSS.
