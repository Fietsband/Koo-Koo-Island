Battle.prototype = {
  start: function(){
    this.initialize();
    window.currentBattle = this;
  },

  stop: function(){
    this.clear();
    window.currentBattle = null;
    delete window.currentBattle;
  },

  initialize: function(){
    this.graphic.fill.bind(this)();
  },

  clear: function(){
    this.graphic.unfill.bind(this)();
    this.eventEngine.clear();
  },

  controls: {
    enable: function(){

    },

    disable: function(){

    }
  },

  graphic: {
    fill: function(){
      this.enemy.spawn();
      window.currentGame.player.spawn();
    },

    unfill: function(){
      this.enemy.unspawn();
      window.currentGame.player.unspawn();
    }
  }

//   playerInitialize: function(){
//     window.currentGame.player.healthBar.update(GameData.player.hp[0]);
//     this.resetAttackPlayer();
//   },

//   resetAttackPlayer: function(){
//     window.currentGame.player.attackBar.resetBar(
//       this.battleEngine.enable.bind(this.battleEngine)
//     )
//   },

//   enemyInitialize: function(){
//     this.enemy.startAttacking();
//   },

//   pause: function(){
//     this.battleEngine.removePlayerAttackListeners();
//     this.enemy.quitAttacking();
//   },

//   endBattle: function(){
//     window.currentBattle.battlePopup.hide();
//   }
}

function Battle(enemy){
  this.enemy          = enemy;
  this.battleControls = new BattleControls(this.enemy);
  this.infoHeader     = new BattleInfoHeader();
  this.eventEngine    = new BattleEventEngine();
  this.battlePopup    = new Popup("battle-sequence-popup", undefined, this.stop.bind(this));
}
