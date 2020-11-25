import { Event, Eventbus } from '../eventbus.js';

export const BattleInteractions = function (battleEl, battle) {
  const inter = battleEl.querySelector('.battle_sequence_interface');
  const parts = {
    attack: function () {
      Eventbus.apply(new Event('playerTurnPlayed', { battle: battle }));
      battle.turns.add(new Event('playerAttacked', { battle: battle }));
    },

    magic: function () {
      openMenu('magic');
    },

    items: function () {
      openMenu('items');
    },

    flee: function () {
      Eventbus.apply(new Event('playerTurnPlayed', { battle: battle }));
      battle.turns.add(new Event('playerFleed', { battle: battle }));
    }
  };

  function openMenu (scope) {
    const el = battlEl.querySelector('.battle_sequence_interface div.' + scope);
    if (el.style.display == 'block') {
      el.style.display = 'none';
    } else {
      //this.closeAllMenus();
      el.style.display = 'block';
    }
  }

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

