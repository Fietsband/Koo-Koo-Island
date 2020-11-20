import { Island } from './levels/island.js';
import { Progress } from './progress.js';

export const Levels = {
  island: Island
};

export const LevelRenderer = (function () {
  function turnPartsInteractive (element, level) {
    for (const property in level.parts) {
      const el = element.querySelector('.interactive_' + property);

      level.parts[property](el);
    };
  }

  return {
    render: function (element, identifier) {
      const level = Levels[identifier];
      const staticGraphic = document.getElementById('graphic_' + identifier);

      Progress.setStat('player', 'currentLevel', identifier);
      element.innerHTML = staticGraphic.innerHTML;
      turnPartsInteractive(element, level);
    }
  };
}());
