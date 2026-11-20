// gta6-meme-x-01: the entry is the X post named in POST.json. This program's
// only job is to hand that file to the grader untouched: it copies POST.json
// from the repository root into the output directory, byte for byte.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  const post = readFileSync(join(repoDir, 'POST.json'));
  writeFileSync(join(outDir, 'POST.json'), post);
} catch (err) {
  console.error(`could not hand POST.json to the grader: ${(err as Error).message}`);
  process.exit(1);
}
