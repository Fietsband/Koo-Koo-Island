export const BattleBus = (function () {
  function battleFinished (e) {
    e.params.battle.turns.lock();
    e.params.battle.inface.disable();
    setTimeout(function () {
      e.params.battle.finish();
    }, 5000);
  }

  function unlockTurnQueue (e) {
    const battle = e.params.battle;

    if (!battle.finished) {
      setTimeout(function () {
        battle.turns.unlock();
      }, 1000);
    }
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'enemyDied':
        case 'playerDied':
        case 'playerFleed':
          battleFinished(e);
          break;
        case 'playerDamaged':
        case 'enemyDamaged':
          unlockTurnQueue(e);
          break;
      }
    }
  };
})();
