import { Progress } from './progress.js';
import { Modal } from './modal.js';

export const Island = (function () {
  function clickShell (e) {
    e.target.removeEventListener('click', clickShell);
    e.target.classList.remove('click');

    Progress.increase('player', 'seashells');

    Modal.open('shell', {
      ok: function () {
        Modal.cancel();
        Progress.setStat('progress', 'hasClickedShell', true);
      }
    });
  }

  function clickFish (e) {
    // TODO Open a dialog for the fish
  }

  return {
    parts: {
      empty_fish: function (element) {
        if (Progress.getStat('progress', 'hasFoundFish')) {
          element.classList.add('hidden');
        }
      },
      fish: function (element) {
        if (Progress.getStat('progress', 'hasFoundFish')) {
          element.classList.remove('hidden');
          element.classList.add('click');
          element.addEventListener('click', clickFish);
        }
      },
      shell: function (element) {
        if (!Progress.getStat('progress', 'hasClickedShell')) {
          element.classList.add('click');
          element.addEventListener('click', clickShell);
        }
      }
    }
  };
})();
