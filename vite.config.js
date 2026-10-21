import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

import { cloudflare } from "@cloudflare/vite-plugin";

dotenv.config()

export default defineConfig({
  plugins: [tailwindcss(), svelte(), cloudflare()],
  server: {
    proxy: {
      '/api/wakatime': {
        target: 'https://wakatime.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/wakatime/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            const key = process.env.WAKATIME_API_KEY;
            if (key) {
              // Encode API Key to Base64 for WakaTime Basic Auth
              const encodedKey = Buffer.from(key).toString('base64');
              proxyReq.setHeader('Authorization', `Basic ${encodedKey}`);
            }
          });
        },
      }
    }
  }
})