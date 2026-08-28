// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical URL (www is primary; apex redirects to it). Used for canonical tags & JSON-LD.
  site: 'https://www.kit-learning.com',
  // Generates /sitemap-index.xml (+ /sitemap-0.xml) listing all pages, using the www canonical.
  integrations: [sitemap()],
  experimental: {
    // Self-host Nunito + auto-generate a metric-matched fallback (prevents
    // font-swap layout shift / CLS) + preload. Replaces the @fontsource import.
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Nunito',
        cssVariable: '--font-nunito',
        weights: ['200 1000'],
        styles: ['normal'],
        subsets: ['cyrillic', 'latin'],
        fallbacks: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    ],
  },
});
