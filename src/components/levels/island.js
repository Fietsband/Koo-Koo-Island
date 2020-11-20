import { Progress } from '../progress.js';
import { Modal } from '../modal.js';
import { Fish } from './island/fish.js';

export const Island = (function () {
  function clickShell (e) {
    e.target.removeEventListener('click', clickShell);
    e.target.classList.remove('click');

    Progress.setStat('progress', 'hasClickedShell', true);
    Progress.increase('player', 'seashells');

    Modal.open('shell', { ok: Modal.cancel });
  }

  function enableEmptyFish(element) {
    if (Progress.getStat('progress', 'hasFoundFish')) {
      element.classList.add('hidden');
    }
  }

  function enableFish(element) {
    if (Progress.getStat('progress', 'hasFoundFish')) {
      element.classList.remove('hidden');
      element.classList.add('click');
      element.addEventListener('click', Fish.popup);
    }
  }

  return {
    callbacks: {
      hasFoundFish: function () {
        const emptyFishEl = document.querySelector('#level .interactive_empty_fish');
        const fishEl = document.querySelector('#level .interactive_fish');
        enableEmptyFish(emptyFishEl);
        enableFish(fishEl);
      }
    },
    parts: {
      empty_fish: enableEmptyFish,
      fish: enableFish,
      shell: function (element) {
        if (!Progress.getStat('progress', 'hasClickedShell')) {
          element.classList.add('click');
          element.addEventListener('click', clickShell);
        }
      }
    }
  };
})();
