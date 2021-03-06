import { Progress } from '../progress.js';
import { Modal } from '../modal.js';

export const Inventory = (function () {
  function openInventory () {
    Modal.open('inventory', { close: Modal.cancel });
  }

  return {
    enable: function () {
      const wrapper = document.getElementById('inventory_wrapper');
      const button = wrapper.querySelector('#inventory');
      wrapper.classList.remove('hidden');
      button.addEventListener('click', openInventory);
    },

    add: function (scope, item) {
      Progress.setStat(function (stat) {
        stat.player.inventory[scope].push(item);
      });
    },

    getEquipedWeapon: function () {
      const weapons = Progress.getStat('player', 'inventory').weapons;
      return weapons.find(function (weapon) {
        return weapon.equiped;
      });
    }
  };
})();
