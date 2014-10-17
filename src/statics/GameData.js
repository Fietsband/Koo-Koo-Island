var ENV = 'production';
var GameData = {
  settings: {},
  player: {
    hp:               [0, 20],
    mp:               [0, 0],
    experience:       0,
    attack_damage:    10,
    battle_timeout:   5000,
    seashells:        0,
    oysters:          0,
    woods:            0,
    armor:            null,
    weapon:           null,
    inventory:        {
      weapons:          [],
      armors:           [],
      skills:           [],
      magic:            [],
      items:            []
    },
    experience_rewards: []
  },

  progress: {
    show_fish: 0,
    show_bottle: 0,
    show_shark: 0,
    show_build_bridge_button: 0,
    enable_build_bridge_button: 0,
    hide_seashell: 0,
    beaten_shark: 0
  }
}
