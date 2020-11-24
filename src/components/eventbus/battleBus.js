import { Battle } from '../battle.js';

export const BattleBus = (function () {
  function battleStarted (e) {
    const battle = new Battle(e.params.enemy);
    battle.start();
  }

  function battleFinished (e) {
    e.params.battle.paused = true;
    e.params.battle.inface.disable();
    setTimeout(function () {
      e.params.battle.finish();
    }, 5000);
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleStarted':
          battleStarted(e);
          break;
        case 'enemyDied':
        case 'playerDied':
        case 'playerFleed':
          battleFinished(e);
          break;
      }
    }
  };
})();
