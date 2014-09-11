Battle.prototype = {
  startBattle: function(){
    this.fillGraphics();
    this.battleEngine.addPlayerAttackListeners();
    this.battlePopup.show();
  },

  stopBattle: function(){
    this.battleEngine.removePlayerAttackListeners();
    this.emptyGraphics();
  },

  fillGraphics: function(){
    this.playerGraphic     = this.player.graphic.innerHTML;
    this.playerPlaceholder = document.querySelector("#battle-sequence-popup .field .player #graphic");
    this.enemyGraphic      = this.enemy.enemyPre.innerHTML;
    this.enemyPlaceholder  = document.querySelector("#battle-sequence-popup .field .enemy #graphic");
    this.enemyPlaceholder.innerHTML = this.enemyGraphic;
    this.playerPlaceholder.innerHTML = this.playerGraphic;
  },

  emptyGraphics: function(){
    this.enemyPlaceholder.innerHTML = "";
    this.playerPlaceholder.innerHTML = "";
  }
}

function Battle(enemy){
  this.player = window.Game.player;
  this.enemy = enemy;
  this.battleEngine = new BattleEngine(enemy);
  this.battlePopup = new Popup("battle-sequence-popup", undefined);
}
