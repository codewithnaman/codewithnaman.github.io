import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://codewithnaman.com',
  base: '/',
  output: 'static',
  build: {
    format: 'file'
  }
});