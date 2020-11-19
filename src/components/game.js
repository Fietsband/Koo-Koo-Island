import { LevelRenderer } from './levelRenderer.js';
import { Player } from './player.js';

const Game = (function () {
  return {
    init: function () {
      this.player = Player;
      this.loadLevel('island');
    },

    loadLevel: function (identifier) {
      const element = document.createElement('pre');
      const mainEl = document.getElementById('main');
      LevelRenderer.render(element, identifier);
      mainEl.appendChild(element);
    }
  };
})();

Game.init();
