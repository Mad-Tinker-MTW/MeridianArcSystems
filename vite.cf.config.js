// Cloudflare Pages build: same static github/ site as vite.pages.config.js,
// but served at the APEX ROOT (base "/") for meridianarcsystems.com instead of
// the GitHub Pages subpath. Output goes to dist/cf. Leaves the GH Pages config intact.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "github",
  base: "/",
  plugins: [react()],
  build: {
    outDir: "../dist/cf",
    emptyOutDir: true
  }
});
