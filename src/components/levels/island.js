import { Shell } from './island/shell.js';
import { Fish } from './island/fish.js';
import { Bottle } from './island/bottle.js';
import { Bridge } from './island/bridge.js';
import { Whirlpool } from './island/whirlpool.js';

export const Island = (function () {
  return {
    initialize: function () {},
    destroy: function () {},
    parts: {
      fish: Fish,
      bottle: Bottle,
      shell: Shell,
      bridge: Bridge,
      whirlpool: Whirlpool
    }
  };
})();
