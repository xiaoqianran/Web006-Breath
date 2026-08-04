/**
 * 将 dist 内根绝对路径 /assets/ 改写为 GitHub Pages 项目 base。
 * 用法：node scripts/rewrite-asset-base.mjs /Web006-Breath/
 */
import fs from "node:fs";
import path from "node:path";

const rawBase = process.argv[2] || process.env.BASE_PATH || "/Web006-Breath/";
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
const dist = path.resolve("dist");

if (!fs.existsSync(dist)) {
  console.error("dist/ 不存在，请先构建");
  process.exit(1);
}

let files = 0;
let replacements = 0;

function rewrite(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  // 避免重复前缀：仅替换未带 base 的 /assets/
  const next = text.replace(/(?<![\w./-])\/assets\//g, `${base}assets/`);
  if (next !== text) {
    fs.writeFileSync(filePath, next);
    replacements += (text.match(/(?<![\w./-])\/assets\//g) || []).length;
    files += 1;
  }
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (/\.(css|js|html|map|json)$/.test(name)) rewrite(p);
  }
}

walk(dist);
console.log(
  JSON.stringify({
    ok: true,
    base,
    filesTouched: files,
    replacements,
  }),
);
