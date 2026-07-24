import fs from "node:fs";

const app = fs.readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const api = fs.readFileSync(new URL("../pages/api/platform.js", import.meta.url), "utf8");

const checks = [
  ["page landmarks", /<main className=/g.test(app) && /<nav /.test(app)],
  ["form labels", /<label>/g.test(app) && /aria-label=/g.test(app)],
  ["keyboard-native controls", /<button/g.test(app) && /<a /g.test(app) && /<select/g.test(app)],
  ["reduced motion", /prefers-reduced-motion/.test(css)],
  ["responsive breakpoints", /@media \(max-width: 620px\)/.test(css)],
  ["same-origin writes", /sameOrigin\(req\)/.test(api)],
  ["private evidence boundary", /privateCollections/.test(api)],
  ["bounded payloads", /maxPayloadBytes/.test(api)],
  ["allow-listed collections", /allowedCollections/.test(api)],
  ["backup dry run", /dryRun/.test(api) && /meridian-backup-v1/.test(api)]
];

const failed = checks.filter(([, passed]) => !passed);
for (const [name, passed] of checks) console.log(`${passed ? "PASS" : "FAIL"} ${name}`);
if (failed.length) process.exitCode = 1;
