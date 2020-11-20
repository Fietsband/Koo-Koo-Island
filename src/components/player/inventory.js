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
    add: function (item) {
      Progress.setStat('inventory', function(stat) {
        stat.player.inventory.push(item);
      });
    }
  };
})();
