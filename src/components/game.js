import { LevelRenderer } from './levelRenderer.js';
import { Progress } from './progress.js';
import { ProgressInterface } from './progress/interface.js';

const Game = (function () {
  return {
    init: function () {
      Progress.load();
      ProgressInterface.enable();

      LevelRenderer.render(Progress.getStat('player', 'currentLevel'));
    }
  };
})();

Game.init();
