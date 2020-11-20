import { Progress } from '../progress.js';
import { Levels } from '../levelRenderer.js';

export const ProgressCallbacks = (function () {
  const shellIntervalCycle = 5000;

  return {
    seashellsIncrease: function () {
      Progress.setInterfaceStat('seashells');
      const stat = Progress.getStat('player', 'seashells');
      const foundFish = Progress.getStat('progress', 'hasFoundFish');

      if (stat == 10 && !foundFish) {
        Progress.setStat('progress', 'hasFoundFish', true);
      }
    },

    hasFoundFish: function () {
      const level = Progress.getStat('player', 'currentLevel');
      console.log(level);
      Levels[level].callbacks.hasFoundFish();
    },

    hasClickedShell: function () {
      setInterval(function () {
        Progress.increase('player', 'seashells');
      }, shellIntervalCycle);
    }
  };
})();
