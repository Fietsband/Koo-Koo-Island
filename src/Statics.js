var clickAreas = {
  island: [
    {
      id: "island-seashell",
      showWhen: null,
      note: "First shell where you can click on",
      klass: "Stats",
      method: "increaseSeashellStats"
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
    driftwood: 0,
    armor:     null,
    weapon:    null,
    inventory: [],
    skills: {
      specials: [],
      magic: []
    }
  }
}
