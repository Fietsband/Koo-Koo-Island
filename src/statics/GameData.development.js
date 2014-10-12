var ENV = "development";
var GameData = {
  settings: {},
  player: {
    hp:               20,
    mp:               0,
    experience:       0,
    attack_damage:    10,
    battle_timeout:   5000,
    seashells:        199,
    oysters:          0,
    woods:            100,
    armor:            {
      itemTitle: "Test armor",
      identifier: "clown"
    },
    weapon:           {
      itemTitle: "Spear",
      identifier: "spear"
    },
    inventory:        {
      weapons:          [{
        itemTitle: "Spear",
        identifier: "spear"
      }],
      armor:            [{
        itemTitle: "Test armor",
        identifier: "clown"
      }],
      skills:           [],
      magic:            [],
      items:            [{
        itemTitle: "A partial map of the world",
        identifier: "map"
      }]
    }
  },

  progress: {
    show_fish: 1,
    show_bottle: 1,
    show_shark: 1,
    show_build_bridge_button: 1,
    enable_build_bridge_button: 1,
    hide_seashell: 0
  }
}
