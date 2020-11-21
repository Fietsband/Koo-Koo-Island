import { LevelRenderer } from '../levelRenderer.js';

export const IslandUnderwater = (function () {
  return {
    parts: {
      island: {
        enable: function (element) {
          element.addEventListener('click', function () {
            LevelRenderer.render('island');
          });
        }
      }
    }
  };
})();
