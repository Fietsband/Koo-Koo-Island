import { LevelRenderer } from './levelRenderer.js';
import { Player } from './player.js';
import { Progress } from './progress.js';

const Game = (function () {
  return {
    init: function () {
      this.player = Player;
      this.loadLevel('island');

      Progress.enableInterface();
      Progress.load();
    },

    loadLevel: function (identifier) {
      const element = document.createElement('pre');
      const mainEl = document.getElementById('main');
      mainEl.innerHTML = '';
      LevelRenderer.render(element, identifier);
      mainEl.appendChild(element);
    }
  };
})();

Game.init();
