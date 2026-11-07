import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  plugins: [tailwindcss(), injectHTML()],
});
