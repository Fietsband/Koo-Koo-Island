StatsCallbacks = {
    seashell: {
        performCallback: function(amount) {
            if (amount > 0 && !window.currentGame.checkProgressOn('show_fish')) {
                window.LonelyIsland.showFish();
            } else if (amount > 19 && !window.currentGame.checkProgressOn('show_bottle')) {
                window.LonelyIsland.showMessageInABottle();
            } else if (amount > 99 && !window.currentGame.checkProgressOn('hide_seashell')) {
                window.LonelyIsland.disableSeashell();
            } else if (amount > 999 && !window.currentGame.checkProgressOn('show_shark')) {
                window.LonelyIsland.addShark();
            }
        }
    },

    oyster: {
        performCallback: function(amount) {}
    },

    wood: {
        performCallback: function(amount) {
            if (amount > 0 && !window.currentGame.checkProgressOn('show_build_bridge_button')) {
                window.LonelyIsland.showBuildBridgeButton();
            }
        }
    }
}