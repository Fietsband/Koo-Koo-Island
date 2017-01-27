Stats.prototype = {
    increaseStat: function(type, amount) {
        var stat = dom.findId(type + "s");
        var statCount = dom.findId(type + "-count");
        stat.style.display = "inline-block";
        window.currentStats.add(type + "s", amount);
        if (window.currentGame.callbacks.statsCallbacks[type].performCallback) {
            window.currentGame.callbacks.statsCallbacks[type].performCallback(GameData.player[type + "s"]);
        }
        statCount.innerHTML = GameData.player[type + "s"];
    },

    add: function(type, amount) {
        GameData.player[type] += amount;
    }
};

function Stats() {}