Stats.prototype = {
  increaseSeashellStats: function(){
    var seaShell            = window.Stats.seashell();
    var seashellCount       = window.Stats.seashellCount();
    seaShell.style.display  = "block";
    window.Stats.addSeashells(1);
    seashellCount.innerHTML = GameData.player.seashells;
  },

  addSeashells: function(amount){
    GameData.player.seashells += amount;
    SeashellCallbacks.performCallback(GameData.player.seashells);
  },

  seashell: function(){
    return document.getElementById("seashells");
  },

  seashellCount: function(){
    return document.getElementById("seashell-count");
  },

  oyster: function(){
    return document.getElementById("oysters");
  },

  oysterCount: function(){
    return document.getElementById("oyster-count");
  }
};

function Stats(){}

$.domReady(function(){
  window.Stats = new Stats();
});
