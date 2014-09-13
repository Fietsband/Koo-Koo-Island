Battle.prototype = {
  startBattle: function(){
    this.fillGraphics();
    this.battlePopup.show();
    this.battleEngine.enable();
    this.player.initiateFight();
    this.enemy.startAttacking();
    window.currentBattle = this;
  },

  stopBattle: function(){
    this.pause();
    this.emptyGraphics();
    window.currentBattle = null;
  },

  pause: function(){
    this.battleEngine.removePlayerAttackListeners();
    this.enemy.quitAttacking();
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
  this.battleEngine = new BattleEngine(this.enemy);
  this.infoHeader = new BattleInfoHeader();
  this.battlePopup = new Popup("battle-sequence-popup", undefined, this.stopBattle.bind(this));
}
