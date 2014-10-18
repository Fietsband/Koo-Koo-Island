BattleControls.prototype = {
  addPlayerAttackListeners: function(){
    this.addMenuButtonOnClickListeners();
    this.addMenuOnKeyUpListeners();
    this.battleInterface.classList.remove("disabled");
  },

  addMenuButtonOnClickListeners: function(){
    var self = this;
    this.attackButton.onclick = function(){
      window.currentGame.player.attack(self.enemy);
    }

    if(!this.skillButton.classList.contains("hide")){
      this.skillButton.onclick = function(){
        // open skills menu
      }
    }

    if(!this.magicButton.classList.contains("hide")){
      this.magicButton.onclick = function(){
        // open magic menu
      }
    }

    if(!this.itemsButton.classList.contains("disabled")){
      this.itemsButton.onclick = function(){
        // open items menu
      }
    }
  },

  addMenuOnKeyUpListeners: function(){
    var self = this;
    document.onkeydown = function(e){
      var e = e || window.event;
      switch(e.keyCode){
        case 65:
          window.currentGame.player.attack(self.enemy);
        break;

        case 70:
          window.currentBattle.battlePopup.hide();
        break;

        case 73:
          if(!this.itemsButton.classList.contains("disabled")){
            // I code
          }
        break;

        case 77:
          if(!this.magicButton.classList.contains("hide")){
            // M code
          }
        break;

        case 83:
          if(!this.skillButton.classList.contains("hide")){
            // S code
          }
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
    this.addPlayerAttackListeners();
  },

  disable: function(){
    this.removePlayerAttackListeners();
  },

  showButtons: function(){
    if(GameData.player.inventory.skills.length <= 0){
      this.skillButton.classList.add("hide");
    }
    else{
      this.skillButton.classList.remove("hide")
    }

    if(GameData.player.inventory.magic.length <= 0){
      this.magicButton.classList.add("hide");
    }
    else{
      this.magicButton.classList.remove("hide");
    }

    if(GameData.player.inventory.items.length <= 0){
      this.itemsButton.classList.add("disabled");
    }
    else{
      this.itemsButton.classList.remove("disabled");
    }
  }
}

function BattleControls(enemy){
  this.enemy           = enemy;
  this.battleInterface = dom.find("#battle-sequence-popup .battle-sequence-interface");
  this.attackButton    = this.battleInterface.querySelector("#attack");
  this.skillButton     = this.battleInterface.querySelector("#skill");
  this.magicButton     = this.battleInterface.querySelector("#magic");
  this.itemsButton     = this.battleInterface.querySelector("#items");
  this.battleTimeout   = null;
  this.showButtons();
}
