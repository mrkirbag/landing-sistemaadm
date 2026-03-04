import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({

  site: 'https://savi.fadikirbag.dev',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
  
  devToolbar: {
    enabled: false,
  },

  output: 'server',
  adapter: netlify(),
});