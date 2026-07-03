// Genera un PDF por tema a partir del sitio ya construido (carpeta build/).
//
// Estrategia: en lugar de convertir el MDX "en crudo" (perderia admonitions,
// resaltado de codigo, tablas...), servimos el build real de Docusaurus e
// imprimimos cada pagina visible del tema con un navegador headless. Asi el PDF
// refleja exactamente el contenido visible publicado. Las paginas del sidebar de
// cada tema se unen en un unico PDF con pdf-lib.
//
// Uso: node scripts/generate-pdfs.mjs   (requiere haber ejecutado antes el build)

import { spawn } from 'node:child_process';
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { PDFDocument } from 'pdf-lib';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const buildDir = path.join(root, 'build');
const outDir = path.join(buildDir, 'pdf');

// Debe coincidir con docusaurus.config.ts (siteBaseUrl).
const baseUrl = process.env.BASE_URL ?? '/dgpp/';
const PORT = Number(process.env.PDF_PORT ?? 4173);
const origin = `http://127.0.0.1:${PORT}`;

// Oculta el "chrome" del sitio para imprimir solo el contenido del articulo.
const PRINT_CSS = `
  .navbar, .navbar-sidebar, .navbar-sidebar__backdrop,
  .theme-doc-sidebar-container,
  .col--3,
  .theme-doc-toc-mobile,
  nav.pagination-nav,
  nav.theme-doc-breadcrumbs,
  .theme-doc-footer,
  footer.footer,
  .theme-pdf-download,
  [class*="backToTop"],
  [class*="announcementBar"] { display: none !important; }

  html, body { background: #fff !important; }
  main { margin: 0 !important; padding: 0 !important; }
  .theme-doc-markdown { max-width: 100% !important; }
  article { padding: 0 !important; }
  a { color: inherit !important; text-decoration: none !important; }
  /* Evita cortar bloques de codigo, tablas e imagenes entre paginas. */
  pre, table, img, blockquote, .theme-admonition { break-inside: avoid; page-break-inside: avoid; }
`;

function parseTemas() {
  const src = readFileSync(path.join(root, 'sidebars.ts'), 'utf8');
  const temas = [];
  const re = /tema(\d{2})Sidebar:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(src))) {
    const num = m[1];
    const ids = [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]);
    if (ids.length) temas.push({ num, ids });
  }
  return temas;
}

async function waitForServer(url, tries = 120) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {
      // servidor aun no listo
    }
    await sleep(500);
  }
  throw new Error(`El servidor no respondio en ${url}`);
}

async function main() {
  if (!existsSync(buildDir)) {
    throw new Error('No existe la carpeta build/. Ejecuta "npm run build" antes.');
  }
  mkdirSync(outDir, { recursive: true });

  const temas = parseTemas();
  if (!temas.length) throw new Error('No se encontraron temas en sidebars.ts');

  console.log(`[pdf] Sirviendo build en ${origin}${baseUrl}`);
  const server = spawn(
    'npx',
    ['docusaurus', 'serve', '--dir', 'build', '--port', String(PORT), '--host', '127.0.0.1', '--no-open'],
    { cwd: root, stdio: 'ignore' },
  );

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    await waitForServer(`${origin}${baseUrl}`);

    for (const { num, ids } of temas) {
      const merged = await PDFDocument.create();
      for (const id of ids) {
        const url = `${origin}${baseUrl}docs/${id}`;
        const page = await browser.newPage();
        await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'light' }]);
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 90000 });
        await page.waitForSelector('.theme-doc-markdown', { timeout: 30000 });
        await page.addStyleTag({ content: PRINT_CSS });
        await page.evaluate(
          () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
        );
        const bytes = await page.pdf({
          format: 'A4',
          printBackground: true,
          margin: { top: '16mm', bottom: '16mm', left: '14mm', right: '14mm' },
        });
        await page.close();

        const srcPdf = await PDFDocument.load(bytes);
        const copied = await merged.copyPages(srcPdf, srcPdf.getPageIndices());
        copied.forEach((p) => merged.addPage(p));
      }
      const outBytes = await merged.save();
      const outFile = path.join(outDir, `tema-${num}.pdf`);
      writeFileSync(outFile, outBytes);
      console.log(`[pdf] Generado ${path.relative(root, outFile)} (${ids.length} paginas)`);
    }
  } finally {
    await browser.close();
    server.kill('SIGTERM');
  }
}

main().catch((err) => {
  console.error('[pdf] Error generando PDFs:', err);
  process.exit(1);
});
