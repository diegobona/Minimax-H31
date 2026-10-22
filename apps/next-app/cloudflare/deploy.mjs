import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const directory = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(directory, '../../..');
const require = createRequire(path.join(repoRoot, 'package.json'));
let wrangler;
try { wrangler = path.join(path.dirname(require.resolve('wrangler/package.json')), 'bin/wrangler.js'); } catch {
  wrangler = path.join(process.env.APPDATA ?? '', 'npm/node_modules/wrangler/bin/wrangler.js');
}
if (!existsSync(wrangler)) throw new Error('Install Wrangler and log in before deploying');
const env = { ...process.env, WRANGLER_SEND_METRICS: 'false' };
// This local deployment uses the existing Wrangler OAuth login, independently of the template's .env settings.
for (const name of ['CLOUDFLARE_API_TOKEN', 'CLOUDFLARE_API_KEY', 'CF_API_TOKEN', 'CF_API_KEY']) delete env[name];
function run(script, args = []) {
  const result = spawnSync(process.execPath, [script, ...args], { cwd: repoRoot, stdio: 'inherit', env });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
run(path.join(directory, 'build.mjs'));
run(wrangler, ['deploy', '--config', path.join(directory, 'wrangler.jsonc'), '--env-file', path.join(repoRoot, '.tmp/cloudflare-site/deploy.env')]);
