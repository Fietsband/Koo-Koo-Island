import { Inventory } from './player/inventory.js';
import { Graphic } from './player/graphic.js';
import { Bar } from './bar.js';
import { Progress } from './progress.js';

export const Player = (function () {
  return {
    inventory: Inventory,
    graphic: Graphic,
    hpBar: new Bar('player.health'),
    magicBar: new Bar('player.magic'),
    turnBar: new Bar('player.attack'),
    get: function (stat) {
      return Progress.getStat('player', stat);
    }
  };
})();
