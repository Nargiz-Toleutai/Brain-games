import * as url from 'node:url';
import runGame from '../index.js';

export default () => runGame();

if (import.meta.url.startsWith('file:')) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    runGame();
  }
}
