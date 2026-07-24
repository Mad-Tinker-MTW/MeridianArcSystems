import fs from "node:fs";
import { academyPaths, applications, glossaryTerms, mksObjects, roadmap } from "../src/mks.js";

const app = fs.readFileSync(new URL("../src/App.jsx", import.meta.url), "utf8");
const css = fs.readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const failures = [];
const pass = (name, condition, detail = "") => {
  console.log(`${condition ? "PASS" : "FAIL"} ${name}${detail ? ` — ${detail}` : ""}`);
  if (!condition) failures.push(name);
};
const unique = (items, key) => new Set(items.map((item) => item[key])).size === items.length;

pass("48 specification objects", mksObjects.length === 48, String(mksObjects.length));
pass("unique specification IDs", unique(mksObjects, "id"));
pass("complete specification records", mksObjects.every((item) => item.id && item.title && item.classification && item.statement && item.purpose && item.rationale && item.validity));
pass("27 glossary terms", glossaryTerms.length === 27, String(glossaryTerms.length));
pass("unique glossary slugs", unique(glossaryTerms, "slug"));
pass("25 worked applications", applications.length === 25, String(applications.length));
pass("unique application IDs", unique(applications, "id"));
pass("10 Academy paths", academyPaths.length === 10, String(academyPaths.length));
pass("complete Academy paths", academyPaths.every((item) => item.lessons.length === 4 && item.mastery.length >= 4 && item.assessment.length >= 3));
pass("single active roadmap phase", roadmap.filter((item) => item.status === "Active").length === 1);
pass("RC1 route and manifest", app.includes('path === "/release-candidate"') && app.includes("MKS-v0.6-rc.1-manifest.json"));
pass("three governed releases", app.includes('id: "REL-003"'));
pass("ten RC acceptance gates", (app.match(/\["RC-\d\d"/g) || []).length === 10);
pass("responsive RC layout", css.includes(".rc-page") && css.includes(".rc-acceptance"));
pass("known limitations preserved", app.includes("knownLimitations"));

if (failures.length) {
  console.error(`\nRelease audit failed: ${failures.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("\nMKS v0.6 RC1 release audit passed.");
}
