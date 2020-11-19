ENV = "test";

window.Test = {};
window.Test.resetStats = function(){
  localStorage.clear();
  window.GameData = {
    settings: {},
    player: {
      hp:               [20, 20],
      mp:               [0, 0],
      experience:       0,
      attack_damage:    10,
      battle_timeout:   5000,
      seashells:        0,
      oysters:          0,
      woods:            0,
      armor:            'none',
      weapon:           'none',
      map:              1,
      inventory:        {
        weapons:          [],
        armors:           [],
        skills:           [],
        magic:            [],
        items:            []
      },
      experience_rewards: [],
      last_visited: "lonely_island"
    },

    progress: {
      show_fish:                     0,
      show_bottle:                   0,
      show_shark:                    0,
      show_build_bridge_button:      0,
      enable_build_bridge_button:    0,
      hide_seashell:                 0,
      beaten_shark:                  0,
      squirrel_house_spear:          0,
      squirrel_house_small_painting: 0,
      squirrel_house_closet:         0,
      squirrel_house_boss_fight:     0,
      squirrel_house_chimney:        0
    }
  }
};

window.Test.resetStats();
