import { Battle } from '../battle.js';

export const BattleBus = (function () {
  function battleStarted (e) {
    const battle = new Battle(e.params.enemy);
    battle.start();
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleStarted':
          battleStarted(e);
          break;
      }
    }
  };
})();
