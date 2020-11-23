import { Inventory } from './player/inventory.js';
import { Graphic } from './player/graphic.js';
import { Bar } from './bar.js';
import { Progress } from './progress.js';

export const Player = (function () {
  function turnDuration () {
    return Progress.getStat('player', 'turnSpeed');
  };

  return {
    inventory: Inventory,
    graphic: Graphic,
    hpBar: new Bar('player.health'),
    magicBar: new Bar('player.magic'),
    turnBar: new Bar('player.attack', { duration: turnDuration() }),
    get: function (stat) {
      return Progress.getStat('player', stat);
    }
  };
})();
