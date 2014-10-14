var ENV = 'test';
var GameData = {
  settings: {},
  player: {
    hp:               20,
    mp:               0,
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
      armor:            [],
      skills:           [],
      magic:            [],
      items:            []
    }
  },

  progress: {
    show_fish: 1,
    show_bottle: 1,
    show_shark: 0,
    show_build_bridge_button: 1,
    enable_build_bridge_button: 1,
    hide_seashell: 0,
    beaten_shark: 0
  }
}
