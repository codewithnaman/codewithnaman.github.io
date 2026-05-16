import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://codewithnaman.com',
  base: '/',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [sitemap()]
});