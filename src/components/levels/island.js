import { Progress } from '../progress.js';
import { Modal } from '../modal.js';
import { Fish } from './island/fish.js';
import { Bottle } from './island/bottle.js';

export const Island = (function () {
  function clickShell (e) {
    e.target.removeEventListener('click', clickShell);
    e.target.classList.remove('click');

    Progress.setStat('hasClickedShell', function (stats) {
      stats.player.seashells += 1;
      stats.progress.hasClickedShell = true;
    });

    Modal.open('shell', { ok: Modal.cancel });
  }

  function enableFish (element) {
    if (Progress.getStat('progress', 'hasFoundFish')) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('click');
        element.addEventListener('click', Fish.popup);
      } else if (element.classList.contains('empty')) {
        element.classList.add('hidden');
      }
    }
  }

  return {
    callbacks: {
      hasFoundFish: function () {
        const fishEl = document.querySelectorAll('#level .interactive_fish');
        fishEl.forEach(enableFish);
      },
      hasFoundMessageInBottle: function () {
        const bottleEl = document.querySelectorAll('#level .interactive_bottle');
        bottleEl.forEach(Bottle.enablePart);
      },
      hasClickedMessageInBottle: function () {
        Bottle.empty();
      }
    },
    parts: {
      fish: enableFish,
      bottle: Bottle.enablePart,
      shell: function (element) {
        if (!Progress.getStat('progress', 'hasClickedShell')) {
          element.classList.add('click');
          element.addEventListener('click', clickShell);
        }
      }
    }
  };
})();
