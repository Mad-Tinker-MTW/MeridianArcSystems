import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "github",
  base: "/MeridianArcSystems/",
  plugins: [react()],
  build: {
    outDir: "../dist/pages",
    emptyOutDir: true
  }
});
