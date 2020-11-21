import { LevelRenderer } from '../levelRenderer.js';
import { FishAttack } from './islandUnderwater/fishAttack.js';

export const IslandUnderwater = (function () {
  const BackToIsland = {
    enable: function (element) {
      element.addEventListener('click', function () {
        LevelRenderer.render('island');
      });
    }
  };

  return {
    initialize: function () {
      FishAttack.spawn();
    },
    destroy: function () {
      FishAttack.destroy();
    },
    parts: {
      island: BackToIsland
    }
  };
})();
