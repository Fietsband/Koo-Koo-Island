var ENV = "development";
var GameData = {
  settings: {},
  player: {
    hp:               [20, 20],
    mp:               [20, 20],
    experience:       0,
    attack_damage:    90,
    battle_timeout:   5000,
    seashells:        199,
    oysters:          0,
    woods:            100,
    armor:            "clown",
    weapon:           "spear",
    map:              2,
    inventory:        {
      weapons:          ["spear"],
      armors:           ["clown"],
      skills:           [],
      magic:            ["fire"],
      items:            ["map", "potion"]
    },
    experience_rewards: ["9", "19", "49"],
    last_visited: "lonely_island"
  },

  progress: {
    show_fish:                     1,
    show_bottle:                   1,
    show_shark:                    1,
    show_build_bridge_button:      1,
    enable_build_bridge_button:    1,
    hide_seashell:                 1,
    beaten_shark:                  0,
    squirrel_house_spear:          1,
    squirrel_house_small_painting: 0,
    squirrel_house_closet:         0,
    squirrel_house_boss_fight:     0,
    squirrel_house_chimney:        0
  }
}
