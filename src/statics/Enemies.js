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
    },

    ending_callback: function(){
      GameData.progress.beaten_shark = 1;
      window.LonelyIsland.removeShark();
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
