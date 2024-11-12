import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "pwapaddel",
        short_name: "pwapaddel",
        description: "Paddelshoppen PWA",
        theme_color: "#ffffff",
      },
      icons: [
        {
          src: "icon192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icon512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
