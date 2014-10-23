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
    window.currentGame.player.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
    this.graphic.fill.bind(this)();
    this.battlePopup.show();
    this.controls.enable.bind(this)();
    this.enemy.startAttacking();
    this.startCallback();
  },

  clear: function(){
    this.graphic.unfill.bind(this)();
    this.controls.disable.bind(this)();
    this.eventEngine.clear();
    this.enemy.restoreHealth();
    this.endCallback();
  },

  canBattle: function(){
    return window.GameData.player.hp[0] > 0;
  },

  controls: {
    enable: function(){
      window.currentGame.player.attackBar.resetBar(
        this.battleControls.enable.bind(this.battleControls)
      );
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

function Battle(enemy, startCallback, endCallback){
  this.enemy          = enemy;
  this.startCallback  = startCallback || function(){};
  this.endCallback    = endCallback || function(){};
  this.battleControls = new BattleControls(this.enemy);
  this.eventEngine    = new BattleEventEngine();
  this.battlePopup    = new Popup("battle-sequence-popup", undefined, this.stop.bind(this));
}
