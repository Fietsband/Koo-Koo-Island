import { Player } from '../player.js';
import { Progress } from '../progress.js';
import { Levels } from '../levelRenderer.js';

export const ProgressCallbacks = (function () {
  const shellIntervalCycle = 500;

  return {
    inventory: function () {
      Progress.setStat(null, function (stat) {
        stat.progress.hasInventory = true;
      });

      Player.inventory.enable();
    },

    oysters: function () {
      Progress.setInterfaceStat('oysters');
      ProgressCallbacks.seashells();
    },

    wood: function () {
      Progress.setInterfaceStat('wood');
      ProgressCallbacks.seashells();
    },

    hasFoundFish: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasFoundFish();
    },

    hasInventory: function () {
      Player.inventory.enable();
    },

    hasFoundMessageInBottle: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasFoundMessageInBottle();
    },

    hasClickedMessageInBottle: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasClickedMessageInBottle();
    }
  };
})();
