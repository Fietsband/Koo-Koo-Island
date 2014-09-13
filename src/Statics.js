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
    },

    {
      id: "battle-big-shark",
      note: "When something happens ?!",
      klass: "BattleInitializer",
      method: "start",
      args: ["tiny-fish"]
    }
  ]
}

var GameData = {
  settings: {},
  player: {
    hp:               20000,
    mp:               0,
    attack_damage:    500,
    battle_timeout:   5000,
    seashells:        0,
    oysters:          0,
    woods:            0,
    armor:            null,
    weapon:           null,
    inventory:        [],
    skills:           [],
    magic:            [],
    items:            []
  }
}

var sellPrices = {
  oyster: { value: 10, type: "seashells" },
  wood:   { value: 20, type: "seashells" }
}

var Enemies = {
  'big-shark' : {
    name: "Shark",
    health: 9999,
    attack_interval: 7500,
    attacks: {
      bite: {
        name: "bite",
        damage: 1000,
        probability: 20
      },

      laser: {
        name: "laser",
        damage: 9999,
        probability: 1
      }
    },
    position: {
      x: 460,
      y: -85
    }
  },

  'tiny-fish' : {
    name: "Tiny Fish",
    health: 10,
    attack_interval: 7500,
    attacks: {
      bite: {
        name: "bite",
        damage: 1,
        probability: 1
      }
    },
    position: {
      x: 460,
      y: -85
    }
  }
}
