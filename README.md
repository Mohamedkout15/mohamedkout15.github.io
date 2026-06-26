# mkout.dev — portfolio

A fast, static portfolio built with [Astro](https://astro.build). Ships zero
JavaScript by default (only a tiny clock + scroll-reveal script). Terminal /
amber-phosphor aesthetic.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build for production

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the built site locally
```

## Customize

- **All your content** lives in `src/data/content.ts` — name, bio, stack,
  projects, experience, contact links. Edit there first.
- **Design tokens** (colors, fonts, spacing) are at the top of
  `src/styles/global.css`.
- **CV**: drop `cv-mohamed-kout.pdf` into `public/` (the download button points
  to `/cv-mohamed-kout.pdf`).
- Set your real **GitHub / LinkedIn** URLs in `content.ts`.

## Deploy

It's a static site — point any host at the `dist/` folder.

**Your VPS + Nginx** (matches your usual setup):

```nginx
server {
  listen 80;
  server_name mkout.dev;
  root /var/www/mkout/dist;
  index index.html;
  location / { try_files $uri $uri/ =404; }
}
```

Or one command on Netlify / Vercel / GitHub Pages (build command `npm run build`,
publish directory `dist`).

## GitLab CI (optional — you already run self-hosted runners)

```yaml
pages:
  image: node:22
  script:
    - npm ci
    - npm run build
  artifacts:
    paths: [dist]
```
