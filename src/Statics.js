$.domReady(function(){
  window.clickAreas = {
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
});

var GameData = {
  settings: {},
  player: {
    hp:               20,
    mp:               0,
    attack_damage:    10,
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
  },

  progress: {
    show_fish: 0,
    show_bottle: 0,
    show_shark: 0,
    show_build_bridge_button: 0,
    enable_build_bridge_button: 0
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
    player_position: {
      x: 460,
      y: -85
    },
    position: {
      x: 0,
      y: 0
    },
    rewards: {
      stats: {
        seashell: 150,
        oyster: 20
      },
      items: {
        sharklaser: 1
      }
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
    player_position: {
      x: 660,
      y: -30
    },
    position: {
      x: 41,
      y: 160
    },
    rewards: {
      stats: {
        seashell: 2
      }
    }
  }
}
