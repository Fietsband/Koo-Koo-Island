export const PlayerBus = (function () {
  function battleRendered (e) {
    const battle = e.params.battle;
    battle.player.turnBar.fill(function () {
      battle.inface.enable();
    });
  }

  function playerDamaged (e) {
    // blink the player a little bit (like FF VI style)
    const player = e.params.battle.player;
    player.hpBar.add(e.params.damage, function () {
      // if hp lowers below 0 - DIE!
    });
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          battleRendered(e);
          break;
        case 'playerDamaged':
          playerDamaged(e);
          break;
      }
    }
  };
})();
