Stats.prototype = {
  increaseStat: function(type, amount){
    var stat = document.getElementById(type + "s");
    var statCount = document.getElementById(type + "-count");
    stat.style.display = "inline-block";
    window.Stats.add(type + "s", amount);
    if(window.Game.callbacks.statsCallbacks[type].performCallback){
      window.Game.callbacks.statsCallbacks[type].performCallback(GameData.player[type + "s"]);
    }
    statCount.innerHTML = GameData.player[type + "s"];
  },

  add: function(type, amount){
    GameData.player[type] += amount;
  }
};

function Stats(){}
