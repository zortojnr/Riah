import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSESTS_DIR = join(__dirname, '../public/assests');

// Images actually referenced in source code — skip everything else
const REFERENCED = new Set([
  // a-series: full-bleed hero/section images — max 2400px, quality 82
  '1a.jpg', '2a.jpg', '3a.jpg', '4a.jpg', '5a.jpg', '6a.jpg',
  '7a.jpg', '8a.jpg', '9a.jpg', '10a.jpg', '11a.jpg', '12a.jpg',
  '13a.jpg', '14a.jpg', '15a.jpg', '16a.jpg', '17a.jpg', '18a.jpg', '19a.jpg',
  // b-series: portrait/card images — max 1200px, quality 82
  '1b.jpg', '2b.jpg', '3b.jpg', '4b.jpg', '5b.jpg', '6b.jpg',
  '7b.jpg', '8b.jpg', '9b.jpg', '10b.jpg', '11b.jpg', '12b.jpg',
  '13b.jpg', '14b.jpg', '15b.jpg',
  // Stefflon/event images used in Enquire gallery
  'Stefflon(1).jpg', 'Stefflon(2).jpg', 'Stefflon(4).jpg',
  'Stefflon(19).jpg', 'Stefflon(21).jpg',
  'Steff3.JPG', 'StefflonDon.JPG',
  'SteffWireless(271).jpg', 'SteffWireless(273).jpg',
  // Other referenced images
  'france.jpg', 'GSON3031.jpg',
]);

// Max dimension config per image group
function getMaxWidth(filename) {
  if (filename.match(/\d+a\./i)) return 2400; // full-bleed: 2400px
  if (filename.match(/\d+b\./i)) return 1200; // cards: 1200px
  if (filename.toLowerCase().startsWith('steff') || filename === 'france.jpg' || filename === 'GSON3031.jpg') return 1600;
  return 1600;
}

async function main() {
  const files = await readdir(ASSESTS_DIR);
  const jpgs = files.filter(f => REFERENCED.has(f));

  console.log(`\nProcessing ${jpgs.length} referenced images...\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of jpgs) {
    const inputPath = join(ASSESTS_DIR, file);
    const outputName = basename(file, extname(file)) + '.webp';
    const outputPath = join(ASSESTS_DIR, outputName);

    const before = (await stat(inputPath)).size;
    totalBefore += before;

    const maxWidth = getMaxWidth(file);

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(outputPath);

    const after = (await stat(outputPath)).size;
    totalAfter += after;

    const saving = Math.round((1 - after / before) * 100);
    console.log(`  ${file.padEnd(35)} ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB  (−${saving}%)`);
  }

  console.log('\n─────────────────────────────────────────────');
  console.log(`  Total before: ${(totalBefore/1024/1024).toFixed(0)}MB`);
  console.log(`  Total after:  ${(totalAfter/1024/1024).toFixed(0)}MB`);
  console.log(`  Saved:        ${((totalBefore - totalAfter)/1024/1024).toFixed(0)}MB (−${Math.round((1 - totalAfter/totalBefore)*100)}%)`);
  console.log('\nDone. Update src references from .jpg → .webp\n');
}

main().catch(err => { console.error(err); process.exit(1); });
