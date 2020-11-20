import { Island } from './island.js';

export const LevelRenderer = (function () {
  const levels = {
    island: Island
  };

  function turnPartsInteractive (element, level) {
    for (const property in level.parts) {
      const el = element.querySelector('.interactive_' + property);

      level.parts[property](el);
    };
  }

  return {
    render: function (element, identifier) {
      const level = levels[identifier];
      const staticGraphic = document.getElementById('graphic_' + identifier);

      element.innerHTML = staticGraphic.innerHTML;
      turnPartsInteractive(element, level);
    }
  };
}());
