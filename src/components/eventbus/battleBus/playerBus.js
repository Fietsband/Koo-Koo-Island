import { Progress } from '../../progress.js';

export const PlayerBus = (function () {
  function battleRendered (e) {
    const battle = e.params.battle;

    battle.player.hpBar.add(0, function () {}, 1);
    battle.player.turnBar.fill(function () {
      battle.inface.enable();
    });
  }

  function playerDamaged (e) {
    // blink the player a little bit (like FF VI style)
    const player = e.params.battle.player;
    const damage = e.params.damage;

    Progress.setStat(function (stat) {
      stat.player.hp.left += damage;
    });

    player.hpBar.add(damage, function () {
      const hpLeft = Progress.getStat('player', 'hp');
      if (hpLeft < 0) {
        console.log('trigger death');
        console.log('set hp back to 1');
      }
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
