import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset URLs work on Cloudflare Pages, Vercel and the
  // /thaicon-web-dev/ subpath used by GitHub Pages.
  base: "./",
  plugins: [react()],
});
