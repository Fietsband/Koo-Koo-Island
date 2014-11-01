var BattleControls = (function(){
  BattleControls.prototype = {
    addPlayerAttackListeners: function(){
      this.addMenuButtonOnClickListeners();
      this.addMenuOnKeyUpListeners();
      this.battleInterface.classList.remove("disabled");
    },

    addMenuButtonOnClickListeners: function(){
      this.attackButton.onclick = window.currentGame.player.attack.bind(this, this.enemy);

      if(!this.skillButton.classList.contains("hide")){
        this.skillButton.onclick = this.openMenu.bind(this, "skills");
      }

      if(!this.magicButton.classList.contains("hide")){
        this.magicButton.onclick = this.openMenu.bind(this, "magic");
      }

      if(!this.itemsButton.classList.contains("disabled")){
        this.itemsButton.onclick = this.openMenu.bind(this, "items");
      }
    },

    addMenuOnKeyUpListeners: function(){
      var self = this;
      document.onkeydown = function(e){
        var e = e || window.event;
        switch(e.keyCode){
          case 65:
            self.closeAllMenus();
            window.currentGame.player.attack(self.enemy);
          break;

          case 70:
            self.closeAllMenus();
            window.currentBattle.battlePopup.hide();
          break;

          case 73:
            if(!self.itemsButton.classList.contains("disabled")){
              self.openMenu("items");
            }
          break;

          case 77:
            if(!self.magicButton.classList.contains("hide")){
              self.openMenu("magic");
            }
          break;

          case 83:
            if(!self.skillButton.classList.contains("hide")){
              self.openMenu("skills");
            }
          break;
        };
      }
    },

    openMenu: function(scope){
      var menu = dom.find(".battle-sequence-interface div." + scope);
      if(menu.style.display == "block"){
        menu.style.display = "none";
      }
      else{
        this.closeAllMenus();
        menu.style.display = "block";
      }
    },

    closeMenu: function(i, scope){
      dom.find(".battle-sequence-interface div." + scope).style.display = "none";
    },

    closeAllMenus: function(){
      var scopes = ["items", "skills", "magic"];
      $.each(scopes, this.closeMenu.bind(this));
    },

    removePlayerAttackListeners: function(){
      this.removeMenuButtonOnClickListeners();
      this.removeMenuOnKeyUpListeners();
    },

    removeMenuButtonOnClickListeners: function(){
      this.attackButton.onclick = null;
      this.skillButton.onclick  = null;
      this.magicButton.onclick  = null;
      this.itemsButton.onclick  = null;
      this.battleInterface.classList.add("disabled");
    },

    lock: function(){
      this.locked = true;
      window.currentGame.player.attackBar.hide();
      this.enemy.attackHoldBar.hide();
    },

    unlock: function(){
      this.locked = false;
      window.currentGame.player.attackBar.show();
      this.enemy.attackHoldBar.show();
    },

    removeMenuOnKeyUpListeners: function(){
      document.onkeydown = null;
    },

    enable: function(){
      if(!this.locked){
        this.showButtons();
        this.addPlayerAttackListeners();
      }
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

      if(GameData.player.inventory.items.length <= 1){
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
    this.locked          = false;
    this.showButtons();
  }
  return BattleControls;
})();
