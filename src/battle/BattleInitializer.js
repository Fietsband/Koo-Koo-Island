BattleInitializer.prototype = {
  start: function(enemyName){
    var enemy = new Enemy(enemyName)
    this.battle = new Battle(enemy);
    this.battle.startBattle();
  }
}

function BattleInitializer(){
}

$.domReady(function(){
  window.BattleInitializer = new BattleInitializer();
});

