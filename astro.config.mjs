import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { defineConfig } from "astro/config";
import markdoc from "@astrojs/markdoc";
import node from "@astrojs/node"; // <-- IMPORTA AQUÍ
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import remarkCodeTitles from 'remark-code-titles'
import decapCmsOauth from "astro-decap-cms-oauth";

export default defineConfig({
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }), // <-- Y AQUÍ
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'css-variables',
    },
    remarkPlugins: [
      remarkCodeTitles
    ]
  },
  integrations: [
    mdx(), 
    markdoc(),
    svelte(), 
    tailwind({
      applyBaseStyles: false,
    }), 
    sitemap(),
    decapCmsOauth()
  ],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        $: path.resolve(__dirname, './src')
      }
    },
    optimizeDeps: {
      allowNodeBuiltins: true
    }
  },
});
