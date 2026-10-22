import { copyFileSync as cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repoRoot = path.resolve(appRoot, '../..');
const buildRoot = path.join(repoRoot, '.tmp', 'cloudflare-site');
const marker = path.join(buildRoot, '.deployment-workspace');

function copyDirectory(source, destination) {
  mkdirSync(destination, { recursive: true });
  for (const entry of readdirSync(source, { withFileTypes: true })) {
    const target = path.join(destination, entry.name);
    if (entry.isDirectory()) copyDirectory(path.join(source, entry.name), target);
    else if (entry.isFile()) cpSync(path.join(source, entry.name), target);
    else throw new Error(`Unexpected link in public assets: ${entry.name}`);
  }
}

if (path.resolve(buildRoot) !== path.resolve(repoRoot, '.tmp/cloudflare-site')) throw new Error('Unexpected build directory');
if (existsSync(buildRoot) && !existsSync(marker)) throw new Error('The build directory is not owned by this deployment script');
mkdirSync(buildRoot, { recursive: true });
writeFileSync(marker, 'MiniMax public-site deployment workspace\n');

// Only the five published pages are exported. Existing SaaS routes and local secrets stay in the source project.
for (const directory of ['app', 'components', 'content', 'public']) {
  rmSync(path.join(buildRoot, directory), { recursive: true, force: true });
  mkdirSync(path.join(buildRoot, directory), { recursive: true });
}
const pages = ['minimax-h3.1-comfyui', 'minimax-h3.1-max', 'minimax-h3.1-pricing', 'minimax-h3.1-release-date'];
for (const file of ['layout.tsx', 'page.tsx', 'globals.css', 'robots.ts', 'sitemap.ts']) {
  cpSync(path.join(appRoot, 'app', file), path.join(buildRoot, 'app', file));
}
for (const page of pages) {
  mkdirSync(path.join(buildRoot, 'app', page), { recursive: true });
  cpSync(path.join(appRoot, 'app', page, 'page.tsx'), path.join(buildRoot, 'app', page, 'page.tsx'));
}
for (const file of ['home.ts', 'comfyui.ts', 'max.ts', 'pricing.ts', 'release-date.ts']) {
  cpSync(path.join(appRoot, 'content', file), path.join(buildRoot, 'content', file));
}
mkdirSync(path.join(buildRoot, 'components/tool'), { recursive: true });
cpSync(path.join(appRoot, 'components/tool/video-workspace.tsx'), path.join(buildRoot, 'components/tool/video-workspace.tsx'));
copyDirectory(path.join(appRoot, 'public'), path.join(buildRoot, 'public'));
cpSync(path.join(appRoot, 'postcss.config.mjs'), path.join(buildRoot, 'postcss.config.mjs'));
if (!existsSync(path.join(buildRoot, 'node_modules'))) symlinkSync(path.join(appRoot, 'node_modules'), path.join(buildRoot, 'node_modules'), 'junction');

const fontRoot = path.join(buildRoot, 'app/fonts');
mkdirSync(fontRoot, { recursive: true });
for (const family of ['sans', 'mono']) {
  cpSync(path.join(appRoot, `node_modules/geist/dist/fonts/geist-${family}/Geist${family === 'mono' ? 'Mono' : ''}-Variable.woff2`), path.join(fontRoot, `${family}.woff2`));
}
const layoutPath = path.join(buildRoot, 'app/layout.tsx');
writeFileSync(layoutPath, readFileSync(layoutPath, 'utf8')
  .replace('../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2', './fonts/sans.woff2')
  .replace('../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2', './fonts/mono.woff2'));
for (const file of ['robots.ts', 'sitemap.ts']) {
  const filePath = path.join(buildRoot, 'app', file);
  writeFileSync(filePath, `export const dynamic = 'force-static';\n${readFileSync(filePath, 'utf8')}`);
}
writeFileSync(path.join(buildRoot, 'package.json'), JSON.stringify({ name: 'minimax-h31-public-site', version: '1.0.0', private: true }, null, 2));
writeFileSync(path.join(buildRoot, 'tsconfig.json'), JSON.stringify({
  extends: '../../tsconfig.json',
  compilerOptions: { baseUrl: '.', paths: { '@/*': ['./*'], '@libs/*': ['../../libs/*'] }, plugins: [{ name: 'next' }], incremental: true, noEmit: true },
  include: ['next-env.d.ts', 'app/**/*.ts', 'app/**/*.tsx', 'components/**/*.tsx', 'content/**/*.ts', '.next/types/**/*.ts'],
  exclude: ['node_modules'],
}, null, 2));
writeFileSync(path.join(buildRoot, 'next.config.mjs'), `export default ${JSON.stringify({
  output: 'export', images: { unoptimized: true, dangerouslyAllowSVG: true },
  experimental: { externalDir: true }, turbopack: { root: repoRoot },
}, null, 2)};\n`);
writeFileSync(path.join(buildRoot, 'deploy.env'), '');

const result = spawnSync(process.execPath, [path.join(appRoot, 'node_modules/next/dist/bin/next'), 'build'], {
  cwd: buildRoot, stdio: 'inherit', env: { ...process.env, NODE_ENV: 'production', NEXT_TELEMETRY_DISABLED: '1' },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
console.log(`Cloudflare assets ready: ${path.join(buildRoot, 'out')}`);
