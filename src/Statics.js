var clickAreas = {
  island: [
    {
      id: "island-seashell",
      note: "First shell where you can click on",
      klass: "Stats",
      method: "increaseStat",
      args: ["seashell", 1, Callbacks.seashell.performCallback]
    },

    {
      id: "island-bridge",
      note: "When you buy your first wood you can build a bridge to the other side",
      klass: null,
      method: null,
      args: null
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
    woods:     0,
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
  wood:   { value: 20, type: "seashells" }
}
