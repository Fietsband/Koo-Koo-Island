Stats.prototype = {
  increaseStat: function(type, amount, callback){
    var stat = document.getElementById(type + "s");
    var statCount = document.getElementById(type + "-count");
    stat.style.display = "inline-block";
    window.Stats.add(type + "s", amount);
    if(callback){
      callback(GameData.player[type + "s"]);
    }
    statCount.innerHTML = GameData.player[type + "s"];
  },

  add: function(type, amount){
    if(amount > 0){
      GameData.player[type] += amount;
    }
    else{
      GameData.player[type] -= amount;
    }
  }
};

function Stats(){}

$.domReady(function(){
  window.Stats = new Stats();
});
