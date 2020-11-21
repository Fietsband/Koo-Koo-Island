import { Progress } from '../progress.js';
import { Modal } from '../modal.js';
import { Shell } from './island/shell.js';
import { Fish } from './island/fish.js';
import { Bottle } from './island/bottle.js';
import { Bridge } from './island/bridge.js';
import { Whirlpool } from './island/whirlpool.js';

export const Island = (function () {
  return {
    parts: {
      fish: Fish,
      bottle: Bottle,
      shell: Shell,
      bridge: Bridge,
      whirlpool: Whirlpool
    }
  };
})();
