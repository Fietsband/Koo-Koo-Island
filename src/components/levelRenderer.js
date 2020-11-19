LevelRenderer = (function () {
  let levels = {
    island: Island
  };

  return {
    render: function (element, identifier) {
      let level = levels[identifier];
      let graphic = Graphics[identifier];

      for (const property in level.staticParts) {
        let part = level.staticParts[property];
        graphic = graphic.replace("[[" + property + "]]", part);
      };

      element.innerHTML = graphic;

      for (const property in level.interactiveParts) {
        let el = element.querySelector('#interactive_' + property);

        level.interactiveParts[property](el);
      };
    }
  };
}());
