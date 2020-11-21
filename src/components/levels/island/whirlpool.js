import { Modal } from '../../modal.js';
import { Progress } from '../../progress.js';

export const Whirlpool = (function () {
  function renderUnderwaterLevel() {

  };

  return {
    enable: function (element) {
      if (!Progress.getStat('progress', 'hasInventory')) {
        return;
      }

      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('click');
        element.addEventListener('click', renderUnderwaterLevel);
      }
    }
  };
}());
