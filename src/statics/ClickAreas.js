var clickAreas = {
  island: [
    {
      id: "#island-seashell",
      note: "First shell where you can click on",
      klass: "currentStats",
      method: "increaseStat",
      args: ["seashell", 1, StatsCallbacks.seashell.performCallback]
    },

    {
      id: "#island-bridge",
      note: "When you buy your first wood you can build a bridge to the other side"
    },

    {
      id: "#battle-big-shark",
      note: "When something happens ?!",
      klass: "BattleInitializer",
      method: "start",
      args: ["big-shark"]
    },

    {
      id: "#island-whirlpool",
      note: "When the magical seashell is gone",
      klass: "UnderwaterShack",
      method: function(){
        window.currentGame.levels.underwater_shack.addToGame();
      }
    }
  ],

  underwater_shack: [
    {
      id: "#island-whirlpool",
      note: "when you click on it you go back to the island"
    }
  ],

  squirrel_city: [
    {
      id: "#mysterious-squirrel",
      note: "A mysterious squirrel"
    },
    {
      id: "#haunted-house-door",
      note: "A mysterious squirrel",
      klass: "SquirrelCity",
      method: "openDoor"
    }
  ],

  squirrel_city_first_level_house: [
    {
      id: "#squirrel-city-goto-first-level",
      note: "go to first level",
      klass: "SquirrelCity",
      method: "goToFirstLevel"
    },

    {
      id: ".door-squirrel-city-house",
      note: "go outside",
      klass: "SquirrelCity",
      method: "goOutside"
    }
  ],

  squirrel_city_second_level_house: [
    {
      id: "#squirrel-city-goto-second-level",
      note: "go to second level",
      klass: "SquirrelCity",
      method: "goToSecondLevel"
    },

    {
      id: "#squirrel-city-goto-ground-level",
      note: "go to ground level",
      klass: "SquirrelCity",
      method: "goToGroundLevel"
    },

    {
      id: ".squirrel-city-spear-wall",
      note: "grab spear on wall",
      klass: "SquirrelCity",
      method: "grabSpear"
    }
  ],

  squirrel_city_attic_level_house: [
    {
      id: "#squirrel-city-goto-first-level-back",
      note: "go to first level",
      klass: "SquirrelCity",
      method: "goToFirstLevel"
    }
  ]
}
