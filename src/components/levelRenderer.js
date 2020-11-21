import { Island } from './levels/island.js';
import { IslandUnderwater } from './levels/islandUnderwater.js';
import { Progress } from './progress.js';

export const Levels = {
  island: Island,
  islandUnderwater: IslandUnderwater
};

export const LevelPart = function (levelId, property, element) {
  const els = element.querySelectorAll('.interactive_' + property);
  const part = Levels[levelId].parts[property];

  return {
    disable: function () {
      els.forEach(part.disable);
    },

    enable: function () {
      els.forEach(part.enable);
    }
  };
};

export const LevelRenderer = (function () {
  function turnPartsInteractive (element, levelId) {
    const level = Levels[levelId];

    for (const property in level.parts) {
      LevelPart(levelId, property, element).enable();
    };
  }

  function idToUnderscore (id) {
    const result = id.replace(/([A-Z])/g, ' $1');

    return result.split(' ').join('_').toLowerCase();
  }

  return {
    render: function (identifier) {
      const element = document.createElement('pre');
      const mainEl = document.getElementById('level');
      const underId = idToUnderscore(identifier);
      const staticGraphic = document.getElementById('graphic_' + underId);

      mainEl.innerHTML = '';
      Progress.setStat(function (stat) {
        stat.player.currentLevel = identifier;
      });
      element.innerHTML = staticGraphic.innerHTML;
      turnPartsInteractive(element, identifier);
      mainEl.appendChild(element);
    }
  };
}());
