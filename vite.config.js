import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/rsc": "http://localhost:8080",
    },
  },
  plugins: [react()],
});