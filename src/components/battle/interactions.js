import { Event, Eventbus } from '../eventbus.js';

export const BattleInteractions = function (battleEl, battle) {
  const inter = battleEl.querySelector('.battle_sequence_interface');
  const parts = {
    attack: function () {
      Eventbus.apply(new Event('playerTurnPlayed', { battle: battle }));
      battle.turns.add(new Event('playerAttacked', { battle: battle }));
    },

    magic: function () {
      console.log('magic');
    },

    items: function () {
      console.log('items');
    },

    flee: function () {
      Eventbus.apply(new Event('playerTurnPlayed', { battle: battle }));
      battle.turns.add(new Event('playerFleed', { battle: battle }));
    }
  };

  function addMenuButtonOnClickListeners () {
    for (const part in parts) {
      const listener = parts[part];

      battleEl
        .querySelector('.battle_options #' + part)
        .addEventListener('click', listener);
    }
  };

  function addMenuOnKeyUpListeners () {
    document.onkeydown = function(e) {
      var e = e || window.event;
      switch (e.keyCode) {
        case 65:
          break;

        case 70:
          break;

        case 73:
          break;

        case 77:
          break;

        case 83:
          break;
      };
    }
  };

  function removeMenuButtonOnClickListeners () {
    for (const part in parts) {
      const listener = parts[part];

      battleEl
        .querySelector('.battle_options #' + part)
        .removeEventListener('click', listener);
    }
  };

  function removeMenuOnKeyUpListeners () {
    document.onkeydown = null;
  };

  return {
    enable: function () {
      addMenuButtonOnClickListeners();
      addMenuOnKeyUpListeners();
      inter.classList.remove('disabled');
    },

    disable: function () {
      removeMenuButtonOnClickListeners();
      removeMenuOnKeyUpListeners();
      inter.classList.add('disabled');
    }
  };
}
//      openMenu: function(scope) {
//          var menu = dom.find(".battle-sequence-interface div." + scope);
//          if (menu.style.display == "block") {
//              menu.style.display = "none";
//          } else {
//              this.closeAllMenus();
//              menu.style.display = "block";
//          }
//      },

//      closeMenu: function(i, scope) {
//          dom.find(".battle-sequence-interface div." + scope).style.display = "none";
//      },

//      closeAllMenus: function() {
//          var scopes = ["items", "skills", "magic"];
//          $.each(scopes, this.closeMenu.bind(this));
//      },

//      removePlayerAttackListeners: function() {
//          this.removeMenuButtonOnClickListeners();
//          this.removeMenuOnKeyUpListeners();
//      },

//      removeMenuButtonOnClickListeners: function() {
//          this.attackButton.onclick = null;
//          this.skillButton.onclick = null;
//          this.magicButton.onclick = null;
//          this.itemsButton.onclick = null;
//          this.battleInterface.classList.add("disabled");
//      },

//      lock: function() {
//          this.locked = true;
//          window.currentGame.player.attackBar.hide();
//          this.enemy.attackHoldBar.hide();
//          this.closeAllMenus();
//      },

//      unlock: function() {
//          this.locked = false;
//          window.currentGame.player.attackBar.show();
//          this.enemy.attackHoldBar.show();
//      },

//      removeMenuOnKeyUpListeners: function() {
//          document.onkeydown = null;
//      },
//      showButtons: function() {
//          if (GameData.player.inventory.skills.length <= 0) {
//              this.skillButton.classList.add("hide");
//          } else {
//              this.skillButton.classList.remove("hide")
//          }

//          if (GameData.player.inventory.magic.length <= 0) {
//              this.magicButton.classList.add("hide");
//          } else {
//              this.magicButton.classList.remove("hide");
//          }

//          if (GameData.player.inventory.items.length <= 1) {
//              this.itemsButton.classList.add("disabled");
//          } else {
//              this.itemsButton.classList.remove("disabled");
//          }
//      }
//  }
