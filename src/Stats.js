Stats.prototype = {
  increaseStat: function(type, amount){
    var stat = document.getElementById(type + "s");
    var statCount = document.getElementById(type + "-count");
    stat.style.display = "inline-block";
    window.Stats.add(type + "s", amount);
    if(Callbacks[type].performCallback){
      Callbacks[type].performCallback(GameData.player[type + "s"]);
    }
    statCount.innerHTML = GameData.player[type + "s"];
  },

  add: function(type, amount){
    GameData.player[type] += amount;
  }
};

function Stats(){}

$.domReady(function(){
  window.Stats = new Stats();
});
