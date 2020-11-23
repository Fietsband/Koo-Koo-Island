import { Battle } from '../battle.js';

export const BattleBus = (function () {
  function battleStarted (e) {
    const battle = new Battle(e.params.enemy);
    battle.start();
  }

  function battleRendered(e) {
    e.params.battle.enemy.turnBar.fill(function () {
      console.log('full enemy');
    });

    e.params.battle.player.turnBar.fill(function () {
      console.log('full player');
    });
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleStarted':
          battleStarted(e);
          break;
        case 'battleRendered':
          battleRendered(e);
          break;
      }
    }
  };
})();
