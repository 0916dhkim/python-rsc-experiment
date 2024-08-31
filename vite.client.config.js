import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, "./src/counter.jsx")],
      filename: (_, entryName) => entryName,
      formats: ["es"],
    },
    outDir: "public",
  },
  plugins: [react()],
});
