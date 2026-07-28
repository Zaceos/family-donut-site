import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://familydonut.preview',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
