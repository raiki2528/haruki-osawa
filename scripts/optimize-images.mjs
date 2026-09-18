import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesDir = path.join(rootDir, "public", "images");

const portraitFiles = new Set([
  "photo-01.jpg",
  "photo-02.jpg",
  "photo-03.jpg",
  "portrait.jpg",
]);

async function optimizeFile(fileName) {
  const inputPath = path.join(imagesDir, fileName);
  const base = fileName.replace(/\.(jpg|jpeg|png)$/i, "");
  const webpPath = path.join(imagesDir, `${base}.webp`);

  const isPortrait = portraitFiles.has(fileName);
  const pipeline = sharp(inputPath).rotate();

  if (isPortrait) {
    pipeline.resize({ width: 1400, height: 1800, fit: "inside", withoutEnlargement: true });
  } else {
    pipeline.resize({ width: 1280, height: 720, fit: "inside", withoutEnlargement: true });
  }

  await pipeline.webp({ quality: 78, effort: 4 }).toFile(webpPath);

  const inputStats = await stat(inputPath);
  const outputStats = await stat(webpPath);
  return { fileName, webp: `${base}.webp`, before: inputStats.size, after: outputStats.size };
}

const files = (await readdir(imagesDir)).filter((name) => /\.(jpg|jpeg|png)$/i.test(name));
const results = await Promise.all(files.map(optimizeFile));
for (const row of results) {
  console.log(`${row.fileName} -> ${row.webp} (${row.before} -> ${row.after} bytes)`);
}
