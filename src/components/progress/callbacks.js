import { Progress } from '../progress.js';
import { Stats } from '../stats.js';

export const ProgressCallbacks = (function () {
  const shellIntervalCycle = 10000;
  let shellInterval;

  return {
    seashellsIncrease: function () {
      Progress.setInterfaceStat('seashells');
    },
    hasClickedShell: function () {
      Stats.enable();
      shellInterval = setInterval(function () {
        Progress.increase('player', 'seashells');
      }, shellIntervalCycle);
    }
  }
})();
