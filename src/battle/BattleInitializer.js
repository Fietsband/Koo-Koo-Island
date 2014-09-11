BattleInitializer.prototype = {
  start: function(enemyName){
    var enemy = new Enemy(enemyName)
    var battle = new Battle(enemy);
    battle.startBattle();
  }
}

function BattleInitializer(){
}

$.domReady(function(){
  window.BattleInitializer = new BattleInitializer();
});

