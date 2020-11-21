import { Progress } from '../../progress.js';
import { LevelRenderer } from './levelRenderer.js';

export const Whirlpool = (function () {
  function renderUnderwaterLevel() {
    LevelRenderer.render('islandUnderwater');
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
