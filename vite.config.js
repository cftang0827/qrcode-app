import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/qrcode-app/', // 如果是 GitHub Pages，一定要設 base！
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'QR Code App',
        short_name: 'QRApp',
        description: 'A simple QR code generator',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
//   server: {
//     allowedHosts: ["57ee-219-68-163-91.ngrok-free.app"]
//   }
})
