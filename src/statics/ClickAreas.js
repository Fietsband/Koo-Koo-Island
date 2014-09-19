var clickAreas = {
  island: [
    {
      id: "island-seashell",
      note: "First shell where you can click on",
      klass: "Stats",
      method: "increaseStat",
      args: ["seashell", 1, StatsCallbacks.seashell.performCallback]
    },

    {
      id: "island-bridge",
      note: "When you buy your first wood you can build a bridge to the other side"
    },

    {
      id: "battle-big-shark",
      note: "When something happens ?!",
      klass: "BattleInitializer",
      method: "start",
      args: ["tiny-fish"]
    }
  ],
  squirrel_city: [
    {
      id: "mysterious-squirrel",
      note: "A mysterious squirrel"
    },
    {
      id: "haunted-house-door",
      note: "A mysterious squirrel",
      klass: "SquirrelCity",
      method: "openDoor"
    }
  ],
  squirrel_city_first_level_house: [],
  squirrel_city_second_level_house: [],
  squirrel_city_attic_level_house: []
}
