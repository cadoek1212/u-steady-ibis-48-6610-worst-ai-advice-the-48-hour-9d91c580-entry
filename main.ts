import { mkdirSync, writeFileSync } from "node:fs";

// Worst AI Advice: one line, max 140 chars. The "advice" is specific
// enough to follow and regret: tweeting a booking reference and passport
// number in public, framed as a confident AI tip.
const line =
  "If your flight is delayed, tweet your booking reference and passport number \u2014 airlines prioritize public complaints.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// The gate accepts 1-140 characters; fail loudly instead of shipping
// an invalid entry.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry line must be 1-140 chars, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, line, "utf8");
