import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The rubber band in my drawer has held the same three pens together since 2019 — the most committed relationship in this house.";

// Gate: the bounty accepts one line of 1-200 characters, not only whitespace.
function validateLine(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 200) {
    throw new Error(`line must be 1-200 characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
}

validateLine(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
