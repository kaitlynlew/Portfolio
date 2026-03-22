import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Root-relative assets so deep links (e.g. /case-study/foo) still load /assets/*.js.
  // With "./", the browser requests /case-study/assets/... and gets index.html → MIME error.
  base: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[hash].js",
        chunkFileNames: "assets/[hash].js",
        assetFileNames: "assets/[hash][extname]",
      },
    },
  },
});
