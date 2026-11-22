// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nacusiancii.github.io',
  base: '/laxmi-krishna-dental',
  vite: { plugins: [tailwindcss()] },
});
