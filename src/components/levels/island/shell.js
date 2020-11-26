import { Progress } from '../../progress.js';
import { Event, Eventbus } from '../../eventbus.js';

export const ShellCounter = (function () {
  return {
    count: function () {
      Eventbus.apply(new Event('shellAdded'));

      const seashells = Progress.getStat('player', 'seashells');

      if (seashells === 10) {
        Eventbus.apply(new Event('fishFound'));
      } else if (seashells === 20) {
        Eventbus.apply(new Event('messageInBottleFound'));
      }
    }
  };
}());

export const Shell = (function () {
  function clickShell (e) {
    e.target.removeEventListener('click', clickShell);

    Eventbus.applyMultiple([
      new Event('shellClicked', { target: e.target }),
      new Event('shellCounterEnabled')
    ]);
  }

  return {
    enable: function (element) {
      if (!Progress.getStat('progress', 'hasClickedShell')) {
        element.classList.add('click');
        element.addEventListener('click', clickShell);
      }
    }
  };
})();
