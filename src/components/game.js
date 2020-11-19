Game = (function (){
  return {
    init: function () {
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
Game.loadLevel('island');
