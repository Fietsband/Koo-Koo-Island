import { Island } from './levels/island.js';
import { Progress } from './progress.js';

export const Levels = {
  island: Island
};

export const LevelRenderer = (function () {
  function turnPartsInteractive (element, level) {
    for (const property in level.parts) {
      const els = element.querySelectorAll('.interactive_' + property);

      els.forEach(function (el) {
        level.parts[property](el);
      });
    };
  }

  return {
    render: function (identifier) {
      const element = document.createElement('pre');
      const mainEl = document.getElementById('level');
      const level = Levels[identifier];
      const staticGraphic = document.getElementById('graphic_' + identifier);

      mainEl.innerHTML = '';
      Progress.setStat('currentLevel', function (stat) {
        stat.player.currentLevel = identifier;
      });
      element.innerHTML = staticGraphic.innerHTML;
      turnPartsInteractive(element, level);
      mainEl.appendChild(element);
    }
  };
}());
