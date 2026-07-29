// Post-build step for the Cloudflare Pages (apex-root) build.
// The static site.webmanifest in github/public/ hardcodes the GitHub Pages
// subpath (/MeridianArcSystems/) in its icon srcs, start_url, and scope.
// Vite copies public/ verbatim, so we rewrite those to apex-root (/) here.
import { readFile, writeFile } from "node:fs/promises";

const manifest = "dist/cf/site.webmanifest";
const rewritten = (await readFile(manifest, "utf8")).replaceAll("/MeridianArcSystems/", "/");
await writeFile(manifest, rewritten);
console.log("package-cf: rewrote site.webmanifest paths to apex root (/)");
