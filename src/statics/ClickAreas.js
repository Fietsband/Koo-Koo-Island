var clickAreas = {
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
    }
  ]
}
