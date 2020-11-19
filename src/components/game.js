import './levelRenderer.js';

var Game = (function (){
  return {
    init: function () {
      this.loadLevel('island');
    },

    loadLevel: function(identifier) {
      const element = document.createElement('pre');
      const mainEl = document.getElementById('main');
      LevelRenderer.render(element, identifier);
      mainEl.appendChild(element);
    }
  };
})();

Game.init();
