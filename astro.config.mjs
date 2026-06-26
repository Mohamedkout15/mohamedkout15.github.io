// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set this to your deployed URL (used for sitemap / canonical links).
  site: 'https://mkout.dev',
  // Static output — Astro ships zero JS by default. Deploy the `dist/` folder
  // anywhere (Nginx on your VPS, Netlify, Vercel, GitHub Pages...).
  output: 'static',
});
