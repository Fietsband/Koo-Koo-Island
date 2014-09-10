var clickAreas = {
  island: [
    {
      id: "island-seashell",
      showWhen: null,
      note: "First shell where you can click on",
      klass: "Stats",
      method: "increaseStat",
      args: ["seashell", 1, SeashellCallbacks.performCallback]
    }
  ]
}

var GameData = {
  settings: {},
  player: {
    hp:        20,
    mp:        0,
    seashells: 0,
    oysters:   0,
    wood:      0,
    armor:     null,
    weapon:    null,
    inventory: [],
    skills: {
      specials: [],
      magic: []
    }
  }
}

var sellPrices = {
  oyster: { value: 10, type: "seashells" },
  wood:   { value: 10, type: "oysters"}
}
