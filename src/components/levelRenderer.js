import { Graphics } from '../graphics/index.js';
import { Island } from './island.js';

export const LevelRenderer = (function () {
  const levels = {
    island: Island
  };

  function draw (graphic, level) {
    for (const property in level.parts) {
      const part = level.parts[property].render();
      graphic = graphic.replace('[[' + property + ']]', part);
    };
    return graphic;
  }

  function turnPartsInteractive (element, level) {
    for (const property in level.parts) {
      const el = element.querySelector('#interactive_' + property);

      level.parts[property].afterRender(el);
    };
  }

  return {
    render: function (element, identifier) {
      const level = levels[identifier];
      const staticGraphic = Graphics[identifier];
      const graphic = draw(staticGraphic, level);

      element.innerHTML = graphic;
      turnPartsInteractive(element, level);
    }
  };
}());
