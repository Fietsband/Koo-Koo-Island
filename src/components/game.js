import { LevelRenderer } from './levelRenderer.js';
import { Player } from './player.js';
import { Progress } from './progress.js';

const Game = (function () {
  return {
    init: function () {
      Progress.load();
      Progress.enableInterface();

      this.player = Player;
      this.loadLevel('island');
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
