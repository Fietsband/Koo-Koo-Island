import { LevelRenderer } from './levelRenderer.js';
import { Player } from './player.js';
import { Progress } from './progress.js';
import { ProgressInterface } from './progress/interface.js';

const Game = (function () {
  return {
    init: function () {
      Progress.load();
      ProgressInterface.enable();

      this.player = Player;
      this.loadLevel(Progress.getStat('player', 'currentLevel'));
    },

    loadLevel: function (identifier) {
      const element = document.createElement('pre');
      const mainEl = document.getElementById('level');
      mainEl.innerHTML = '';
      LevelRenderer.render(element, identifier);
      mainEl.appendChild(element);
    }
  };
})();

Game.init();
