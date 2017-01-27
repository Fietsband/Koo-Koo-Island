BattleInitializer.prototype = {
    start: function(enemyName, startCallback, endCallback) {
        var enemy = new Enemy(enemyName);
        this.battle = new Battle(enemy, startCallback, endCallback);
        if (this.battle.canBattle()) {
            this.battle.start();
        }
    }
}

function BattleInitializer() {}

$.domReady(function() {
    window.BattleInitializer = new BattleInitializer();
});