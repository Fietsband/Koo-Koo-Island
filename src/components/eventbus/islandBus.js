import { Progress } from '../progress.js';
import { Modal } from '../modal.js';
import { LevelPart } from '../levelRenderer.js';
import { ShellCounter } from '../levels/island/shell.js';

export const IslandBus = (function () {
  function shellClicked (e) {
    e.params.target.classList.remove('click');

    Progress.setStat(function (stats) {
      stats.progress.hasClickedShell = true;
    });

    Modal.open('shell', { ok: Modal.cancel });
  }

  function shellCounterEnabled (e) {
    Progress.setInterfaceStat('seashells');

    setInterval(ShellCounter.count, ShellCounter.intervalCycle);
  }

  function fishFound (e) {
    LevelPart('island', 'fish', document).enable();
  }

  function messageInBottleFound (e) {
    LevelPart('island', 'bottle', document).enable();
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'fishFound':
          fishFound(e);
          break;
        case 'messageInBottleFound':
          messageInBottleFound(e);
          break;
        case 'shellClicked':
          shellClicked(e);
          break;
        case 'shellCounterEnabled':
        case 'hasClickedShellInit':
          shellCounterEnabled(e);
          break;
      }
    }
  };
})();
