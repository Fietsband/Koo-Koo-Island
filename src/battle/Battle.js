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
    delete window.currentBattle;
  },

  pause: function(){
    this.battleEngine.removePlayerAttackListeners();
    this.enemy.quitAttacking();
  },

  endBattle: function(characterHealth, pauseBattleCallback, endBattleCallback, endingTimeoutTime){
    var self = this;
    this.endingTimeoutTime = endingTimeoutTime || 4000;
    window.currentBattle.pause();

    if(pauseBattleCallback){
      pauseBattleCallback();
    }

    self.endingTimeout = setTimeout(function(){
      window.currentBattle.battlePopup.hide();
      clearTimeout(self.endingTimeout);
      if(endBattleCallback){
        endBattleCallback();
      }
    }, this.endingTimeoutTime);
  },

  fillGraphics: function(){
    this.enemy.spawn();
    this.player.spawn();
  },

  emptyGraphics: function(){
    this.enemy.unspawn();
    this.player.unspawn();
  }
}

function Battle(enemy){
  this.player = window.currentGame.player;
  this.enemy = enemy;
  this.battleEngine = new BattleEngine(this.enemy);
  this.infoHeader = new BattleInfoHeader();
  this.battlePopup = new Popup("battle-sequence-popup", undefined, this.stopBattle.bind(this));
}
