import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, "src");

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function ensureDotSlash(relPosix) {
  if (relPosix.startsWith(".")) return relPosix;
  return `./${relPosix}`;
}

function walk(dirAbs, out = []) {
  const entries = fs.readdirSync(dirAbs, { withFileTypes: true });
  for (const ent of entries) {
    // skip heavy folders
    if (ent.isDirectory() && (ent.name === "node_modules" || ent.name === "dist" || ent.name === "docs")) {
      continue;
    }
    const abs = path.join(dirAbs, ent.name);
    if (ent.isDirectory()) walk(abs, out);
    else out.push(abs);
  }
  return out;
}

function shouldProcess(fileAbs) {
  return /\.(ts|tsx|js|jsx|mjs|cjs)$/.test(fileAbs);
}

function rewriteFile(fileAbs) {
  const fileDir = path.dirname(fileAbs);
  const before = fs.readFileSync(fileAbs, "utf8");

  // Replace any string literal that begins with "@/..."
  const after = before.replace(/(['"])@\/([^'"]+)\1/g, (m, quote, rest) => {
    const targetAbs = path.join(srcRoot, rest);
    const rel = path.relative(fileDir, targetAbs);
    const relPosix = ensureDotSlash(toPosix(rel));
    return `${quote}${relPosix}${quote}`;
  });

  if (after !== before) {
    fs.writeFileSync(fileAbs, after, "utf8");
    return 1;
  }
  return 0;
}

function main() {
  if (!fs.existsSync(srcRoot)) {
    console.error(`[rewrite-alias-imports] src root not found: ${srcRoot}`);
    process.exitCode = 1;
    return;
  }

  const files = walk(srcRoot).filter(shouldProcess);
  let changed = 0;
  for (const f of files) changed += rewriteFile(f);

  console.log(`[rewrite-alias-imports] done. changed files: ${changed}`);
}

main();


