Game = (function (){
  return {
    // creates a div#main element
    init: function () {
      const element = document.createElement('div');
      element.setAttribute('id', 'main');
      document.body.appendChild(element);
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
