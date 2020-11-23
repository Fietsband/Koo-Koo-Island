import { Battle } from '../battle.js';

export const BattleBus = (function () {
  function battleStarted (e) {
    const battle = new Battle(e.params.enemy);
    battle.start();
  }

  function battleFinished (e) {
    e.params.battle.finish();
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleStarted':
          battleStarted(e);
          break;
        case 'battleFinished':
          battleFinished(e);
          break;
      }
    }
  };
})();
