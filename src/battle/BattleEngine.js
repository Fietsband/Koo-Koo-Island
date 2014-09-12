BattleEngine.prototype = {
  addPlayerAttackListeners: function(){
    this.addMenuButtonOnClickListeners();
    this.addMenuOnKeyUpListeners();
    this.battleInterface.classList.remove("disabled");
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
    var self = this;
    document.onkeydown = function(e){
      var e = e || window.event;
      switch(e.keyCode){
        case 65:
          window.Game.player.attack(self.enemy);
        break;

        case 70:
          window.currentBattle.battlePopup.hide();
        break;

        case 73:
          // I code
        break;

        case 77:
         // M code
        break;

        case 83:
          // S code
        break;
      };
    }
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
    this.battleInterface.classList.add("disabled");
  },

  removeMenuOnKeyUpListeners: function(){
    document.onkeydown = null;
  },

  enable: function(){
    var self = this;
    this.battleTimeout = setTimeout(function(){
      self.addPlayerAttackListeners();
      clearTimeout(self.battleTimeout);
    }, GameData.player.battle_timeout);
  },

  disable: function(){
    clearTimeout(this.battleTimeout);
    this.removePlayerAttackListeners();
    this.enable();
  }
}

function BattleEngine(enemy){
  this.enemy = enemy;
  this.battleInterface = document.querySelector("#battle-sequence-popup .battle-sequence-interface");
  this.attackButton = this.battleInterface.querySelector("#attack");
  this.skillButton = this.battleInterface.querySelector("#skill");
  this.magicButton = this.battleInterface.querySelector("#magic");
  this.itemsButton = this.battleInterface.querySelector("#items");
  this.battleTimeout = null;
}
