import { copyFile, mkdir, cp } from "node:fs/promises";

await mkdir("dist/.openai", { recursive: true });
await copyFile(".openai/hosting.json", "dist/.openai/hosting.json");
await cp("migrations", "dist/.openai/drizzle", { recursive: true });
