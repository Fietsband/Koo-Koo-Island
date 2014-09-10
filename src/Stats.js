Stats.prototype = {
  increaseSeashellStats: function(){
    var seaShell            = window.Stats.seashell();
    var seashellCount       = window.Stats.seashellsCount();
    seaShell.style.display  = "inline-block";
    window.Stats.addSeashells(1);
    seashellCount.innerHTML = GameData.player.seashells;
  },

  increaseStat: function(type, amount){
    var stat = window.Stats[type]();
    var statCount = window.Stats[type + "sCount"]();
    stat.style.display = "inline-block";
    window.Stats.add(type + "s", amount);
    statCount.innerHTML = GameData.player[type + "s"];
  },

  addSeashells: function(amount){
    if(amount > 0){
      GameData.player.seashells += amount;
      SeashellCallbacks.performCallback(GameData.player.seashells);
    }
    else{
      GameData.player.seashells -= amount;
    }
  },

  add: function(type, amount){
    if(amount > 0){
      GameData.player[type] += amount;
    }
    else{
      GameData.player[type] -= amount;
    }
  },

  seashell: function(){
    return document.getElementById("seashells");
  },

  seashellsCount: function(){
    return document.getElementById("seashell-count");
  },

  oyster: function(){
    return document.getElementById("oysters");
  },

  oystersCount: function(){
    return document.getElementById("oyster-count");
  }
};

function Stats(){}

$.domReady(function(){
  window.Stats = new Stats();
});
