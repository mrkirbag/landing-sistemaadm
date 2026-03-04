import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';


export default defineConfig({

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

  site: {
    url: 'https://savi.fadikirbag.dev',
  },

});