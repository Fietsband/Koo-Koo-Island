BattleInitializer.prototype = {
  start: function(enemyName){
    var enemy = new Enemy(enemyName)
    this.battle = new Battle(enemy);
    this.battle.start();
  }
}

function BattleInitializer(){
}

$.domReady(function(){
  window.BattleInitializer = new BattleInitializer();
});

