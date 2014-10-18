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
    window.currentGame.player.healthBar.update(GameData.player.hp[0]);
    //this.enemy.startAttacking();
    this.graphic.fill.bind(this)();
    this.controls.enable.bind(this)();
    this.battlePopup.show();
  },

  clear: function(){
    this.enemy.quitAttacking();
    this.graphic.unfill.bind(this)();
    this.controls.disable.bind(this)();
    this.eventEngine.clear();
  },

  controls: {
    enable: function(){
      window.currentGame.player.attackBar.resetBar();
      // window.currentGame.player.attackBar.resetBar(
      //   this.battleControls.enable.bind(this.battleControls)
      // );
    },

    disable: function(){
      this.battleControls.removePlayerAttackListeners();
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
}

function Battle(enemy){
  this.enemy          = enemy;
  this.battleControls = new BattleControls(this.enemy);
  this.infoHeader     = new BattleInfoHeader();
  this.eventEngine    = new BattleEventEngine();
  this.battlePopup    = new Popup("battle-sequence-popup", undefined, this.stop.bind(this));
}
