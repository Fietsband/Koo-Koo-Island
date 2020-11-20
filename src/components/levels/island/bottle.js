import { Modal } from '../../modal.js';
import { Progress } from '../../progress.js';
import { Player } from '../../player.js';

export const Bottle = (function () {
  return {
    enablePart: function (element) {
      if (Progress.getStat('progress', 'hasFoundMessageInBottle')) {
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden');

          if (!Progress.getStat('progress', 'hasClickedMessageInBottle')) {
            element.classList.add('click');
            element.addEventListener('click', Bottle.popup);
          }
        } else if (element.classList.contains('empty')) {
          element.classList.add('hidden');
        }
      }
    },

    empty: function () {
      const message = document.querySelector('.interactive_bottle.message');
      const bottleEl = document.querySelectorAll('#level .interactive_bottle');
      message.innerHTML = ' ';

      bottleEl.forEach(function (e) {
        e.classList.remove('click');
        e.removeEventListener('click', Bottle.popup);
      });
    },

    popup: function () {
      Progress.setStat('hasClickedMessageInBottle', function (stat) {
        stat.progress.hasClickedMessageInBottle = true;
      });

      Modal.open('message_in_bottle', {
        cancel: function () {
          Player.inventory.add('message_in_bottle');
          Modal.cancel();
        }
      });
    }
  };
}());
