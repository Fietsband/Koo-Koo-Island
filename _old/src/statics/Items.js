window.Items = {
    remove: function(scope) {
        dom.find("#inventory-stash .items #" + scope).remove();
        if (window.currentBattle) {
            dom.find(".battle-sequence-interface .items #" + scope).remove();
        }
        var itemIndex = GameData.player.inventory.items.indexOf(scope);
        GameData.player.inventory.items.splice(itemIndex, 1);
    },

    potion: {
        title: "Potion",
        description: "Restores 25 hp",
        use: function() {
            window.Items.remove("potion");
            window.currentGame.player.increaseHealth(25);
        }
    },

    hiPotion: {
        title: "Hi-Potion",
        description: "Restores 100 hp",
        use: function() {
            window.Items.remove("hiPotion");
            window.currentGame.player.increaseHealth(100);
        }
    },

    ether: {
        title: "Ether",
        description: "Restores 15 mp",
        use: function() {
            window.Items.remove("ether");
            window.currentGame.player.increaseMagic(15);
        }
    },

    hiEther: {
        title: "Hi-Ether",
        description: "Restores 50 mp",
        use: function() {
            window.Items.remove("hiEther");
            window.currentGame.player.increaseMagic(50);
        }
    },

    elixer: {
        title: "Elixer",
        description: "Restores full hp and mp",
        use: function() {
            window.Items.remove("elixer");
            window.currentGame.player.increaseHealth(GameData.player.hp[1]);
            window.currentGame.player.increaseMagic(GameData.player.mp[1]);
        }
    },

    map: {
        title: "A partial map of the world",
        description: "A partial map of the world",
        use: function() {
            window.currentGame.gameMap.popUp.show();
        }
    }
};

$.freeze(window.Items);