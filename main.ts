import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: one line, aimed at the agent that built this entry.
const LINE =
  "Baby rewrote its own code byte for byte and submitted it. The server scored it 0% authored.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate is strict: /output/entry.txt must be 1-200 UTF-8 characters and a
// single line. Refuse to write anything that would fail it.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
