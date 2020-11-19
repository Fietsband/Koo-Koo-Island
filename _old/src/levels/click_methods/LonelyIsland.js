window.LevelClickMethods.LonelyIsland = {
    islandSeashell: function() {
        window.currentStats.increaseStat(
            "seashell", 1, window.currentGame.callbacks.statsCallbacks.seashell.performCallback
        );
    },

    islandBridge: function() {

    },

    battleBigShark: function() {
        window.BattleInitializer.start("big-shark");
    },

    islandWhirlpool: function() {
        window.currentGame.levels.underwater_shack.addToGame();
    }
};