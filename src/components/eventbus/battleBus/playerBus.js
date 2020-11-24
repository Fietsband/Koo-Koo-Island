import { Animation } from '../../animation.js';
import { Progress } from '../../progress.js';

export const PlayerBus = (function () {
  function fillTurnBar (e) {
    const battle = e.params.battle;

    battle.player.turnBar.fill(function () {
      battle.inface.enable();
    });
  }

  function fillHpBar (e) {
    const battle = e.params.battle;

    battle.player.hpBar.add(0, function () {}, 1);
  }

  function playerDamaged (e) {
    // blink the player a little bit (like FF VI style)
    const player = e.params.battle.player;
    const damage = e.params.damage;

    Progress.setStat(function (stat) {
      stat.player.hp.left += damage;
    });

    player.hpBar.add(damage, function () {
      const hpLeft = Progress.getStat('player', 'hp').left;

      if (hpLeft <= 0) {
        player.die.call(e.params.battle);
      }
    });
  }

  function playerDied (e) {
    Progress.setStat(function (stat) {
      stat.player.hp.left = 1;
    });
  }

  function playerAttacked (e) {
    e.params.battle.inface.disable();

    const player = e.params.battle.player;
    const weapon = player.inventory.getEquipedWeapon();
    const enemy = e.params.battle.enemy;
    const animation = new Animation(
      weapon.type + 'PlayerAttackAnimation',
      document.querySelector('#battle .player'),
      enemy.takeDamage.bind(e.params.battle, weapon.damage)
    );

    player.turnBar.empty();
    animation.animate();
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          fillTurnBar(e)
          fillHpBar(e)
          break;
        case 'enemyDamaged':
          fillTurnBar(e)
          break;
        case 'playerDamaged':
          playerDamaged(e);
          break;
        case 'playerDied':
          playerDied(e);
          break;
        case 'playerAttacked':
          playerAttacked(e);
          break;
      }
    }
  };
})();
