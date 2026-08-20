// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical URL (www is primary; apex redirects to it). Used for canonical tags & JSON-LD.
  site: 'https://www.kit-learning.com',
  // Generates /sitemap-index.xml (+ /sitemap-0.xml) listing all pages, using the www canonical.
  integrations: [sitemap()],
});
