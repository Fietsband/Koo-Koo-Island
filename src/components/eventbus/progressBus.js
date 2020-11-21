import { Progress } from '../progress.js';

export const ProgressBus = (function () {
  function fishFound (e) {
    const foundFish = Progress.getStat('progress', 'hasFoundFish');

    if (foundFish) {
      return;
    }

    Progress.setStat(function (stat) {
      stat.progress.hasFoundFish = true;
    });
  }

  function messageInBottleFound (e) {
    const foundMessageInBottle = Progress.getStat('progress', 'hasFoundMessageInBottle');

    if (foundMessageInBottle) {
      return;
    }

    Progress.setStat(function (stat) {
      stat.progress.hasFoundMessageInBottle = true;
    });
  }

  function shellAdded(e) {
    Progress.setStat(function (stat) {
      stat.player.seashells += 1;
    });

    Progress.setInterfaceStat('seashells');
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
        case 'shellAdded':
          shellAdded(e);
          break;
      }
    }
  }
})();
