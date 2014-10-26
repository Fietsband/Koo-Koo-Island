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

    player_position: { x: 460, y: -85 },
    position:        { x: 0,   y: 0 },
    rewards: {
      experience: { amount: 1000 },
      stats:      { seashell: 150, oyster: 20 },
      items:      { weapon: "shark_laser" }
    },

    endingCallback: function(){
      GameData.progress.beaten_shark = 1;
      window.LonelyIsland.removeShark();
    }
  },

  'btl-tiny-fish' : {
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
    player_position: { x: 660, y: -50 },
    position:        { x: 41,  y: 160 },
    rewards: {
      experience: { amount: 1 },
      stats:      { seashell: 2, wood: 1 }
    }
  },

  'btl-tiny-fish-with-gun' : {
    name: "Tiny Fish With Gun",
    health: 20,
    attack_interval: 7500,
    attacks: {
      bite: {
        name: "bite",
        damage: 1,
        probability: 3
      },

      shoot: {
        name: "shoot",
        damage: 5,
        probability: 1
      }
    },
    player_position: { x: 660, y: -50 },
    position:        { x: 41, y: 160 },
    rewards: {
      experience: { amount: 1 },
      stats:      { seashell: 2, wood: 5 }
    }
  },

  'btl-big-fish' : {
    name: "Big Fish",
    health: 50,
    attack_interval: 10500,
    attacks: {
      bite: {
        name: "bite",
        damage: 1,
        probability: 3
      },

      stomp: {
        name: "stomp",
        damage: 10,
        probability: 1
      }
    },
    player_position: { x: 660, y: -60 },
    position:        { x: 41,  y: 90 },
    rewards: {
      experience: { amount: 2 },
      stats:      { seashell: 5, wood: 10 }
    }
  },

  'evil-portrait' : {
    name: "Evil Portrait",
    health: 100,
    attack_interval: 7500,
    attacks: {
      paint: {
        name: "paint",
        damage: 5,
        probability: 5
      },

      water: {
        name: "water",
        damage: 10,
        probability: 1
      },

      smear: {
        name: "smear",
        damage: 1,
        probability: 1
      }
    },

    player_position: { x: 680, y: -105 },
    position:        { x: 0,   y: 40 },
    rewards: {
      experience: { amount: 50 },
      stats:      { seashell: 150, oyster: 20 },
      items:      { map: 2 }
    },

    endingCallback: function(){
      GameData.progress.squirrel_house_boss_fight = 1;
    }
  }
}
