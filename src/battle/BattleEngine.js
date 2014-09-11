BattleEngine.prototype = {
  addPlayerAttackListeners: function(){
    this.addMenuButtonOnClickListeners();
    this.addMenuOnKeyUpListeners();
  },

  addMenuButtonOnClickListeners: function(){
    var self = this;
    this.attackButton.onclick = function(){
      window.Game.player.attack(self.enemy);
    }

    this.skillButton.onclick = function(){
      // open skills menu
    }

    this.magicButton.onclick = function(){
      // open magic menu
    }

    this.itemsButton.onclick = function(){
      // open items menu
    }
  },

  addMenuOnKeyUpListeners: function(){
    // add on key up listeners
  },

  removePlayerAttackListeners: function(){
    this.removeMenuButtonOnClickListeners();
    this.removeMenuOnKeyUpListeners();
  },

  removeMenuButtonOnClickListeners: function(){
    this.attackButton.onclick = null;
    this.skillButton.onclick = null;
    this.magicButton.onclick = null;
    this.itemsButton.onclick = null;
  },

  removeMenuOnKeyUpListeners: function(){
    // add on remove up listeners
  },
}

function BattleEngine(enemy){
  this.enemyIdentifier = enemy;
  this.battleInterface = document.querySelector("#battle-sequence-popup .battle-sequence-interface");
  this.attackButton = this.battleInterface.querySelector("#attack");
  this.skillButton = this.battleInterface.querySelector("#skill");
  this.magicButton = this.battleInterface.querySelector("#magic");
  this.itemsButton = this.battleInterface.querySelector("#items");
}
