import { Modal } from '../../modal.js';
import { Progress } from '../../progress.js';
import { Player } from '../../player.js';
import { Event, Eventbus } from '../../eventbus.js';

export const Bottle = (function () {
  return {
    enable: function (element) {
      if (!Progress.getStat('progress', 'hasFoundMessageInBottle')) {
        return;
      }

      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');

        if (!Progress.getStat('progress', 'hasInventory')) {
          element.classList.add('click');
          element.addEventListener('click', Bottle.popup);
        }
      } else if (element.classList.contains('empty')) {
        element.classList.add('hidden');
      }

      if (Progress.getStat('progress', 'hasInventory')) {
        if (element.classList.contains('message')) {
          element.innerHTML = ' ';
        }
      }
    },

    disable: function (element) {
      if (Progress.getStat('progress', 'hasInventory')) {
        if (element.classList.contains('message')) {
          element.innerHTML = ' ';
        }
      }

      element.classList.remove('click');
      element.removeEventListener('click', Bottle.popup);
    },

    popup: function () {
      Progress.setStat(function (stat) {
        stat.progress.hasInventory = true;
      });

      Eventbus.applyMultiple([
        new Event('inventoryEnabled'),
        new Event('itemAdded', {
          scope: 'maps', item: 'mapLevel1'
        })
      ]);

      Modal.open('message_in_bottle', { cancel: Modal.cancel });
    }
  };
}());
