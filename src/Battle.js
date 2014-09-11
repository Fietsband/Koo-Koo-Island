Battle.prototype = {
  startBattle: function(){
    this.fillGraphics();
    this.battlePopup.show();
  },

  stopBattle: function(){
    this.emptyGraphics();
  },

  fillGraphics: function(){
    var enemyGraphic = this.enemy.enemyPre.innerHTML;
    var enemyPlaceholder = document.querySelector("#battle-sequence-popup .field .enemy #graphic");
    enemyPlaceholder.innerHTML = enemyGraphic;
  },

  emptyGraphics: function(){

  }
}

function Battle(enemy){
  this.player = window.Game.player;
  this.enemy = enemy;
  this.battlePopup = new Popup("battle-sequence-popup", undefined);
}


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
