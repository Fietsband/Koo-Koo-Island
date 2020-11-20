import { Progress } from '../progress.js';

export const ProgressCallbacks = (function () {
  const shellIntervalCycle = 10000;

  return {
    seashellsIncrease: function () {
      Progress.setInterfaceStat('seashells');
    },
    hasClickedShell: function () {
      setInterval(function () {
        Progress.increase('player', 'seashells');
      }, shellIntervalCycle);
    }
  };
})();
