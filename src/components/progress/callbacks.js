import { Progress } from '../progress.js';
import { Levels } from '../levelRenderer.js';

export const ProgressCallbacks = (function () {
  const shellIntervalCycle = 5000;

  return {
    oystersIncrease: function () {
      Progress.setInterfaceStat('oysters');
    },

    woodIncrease: function () {
      Progress.setInterfaceStat('wood');
    },

    seashells: function () {
      Progress.setInterfaceStat('seashells');
    },

    seashellsIncrease: function () {
      Progress.setInterfaceStat('seashells');
      const stat = Progress.getStat('player', 'seashells');
      const foundFish = Progress.getStat('progress', 'hasFoundFish');

      if (!foundFish && stat == 10) {
        Progress.setStat('progress', 'hasFoundFish', true);
      }
    },

    hasFoundFish: function () {
      const level = Progress.getStat('player', 'currentLevel');
      Levels[level].callbacks.hasFoundFish();
    },

    hasClickedShell: function () {
      setInterval(function () {
        Progress.increase('player', 'seashells');
      }, shellIntervalCycle);
    }
  };
})();
