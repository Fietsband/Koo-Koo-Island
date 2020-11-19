LevelRenderer = (function () {
  let levels = {
    island: Island
  };

  function draw (graphic, level) {
    for (const property in level.parts) {
      let part = level.parts[property].render();
      graphic = graphic.replace("[[" + property + "]]", part);
    };
    return graphic;
  }

  function turnPartsInteractive (element, level) {
    for (const property in level.parts) {
      let el = element.querySelector('#interactive_' + property);

      level.parts[property].afterRender(el);
    };
  }

  return {
    render: function (element, identifier) {
      let level = levels[identifier];
      let staticGraphic = Graphics[identifier];
      let graphic = draw(staticGraphic, level);

      element.innerHTML = graphic;
      turnPartsInteractive(element, level);
    }
  };
}());
