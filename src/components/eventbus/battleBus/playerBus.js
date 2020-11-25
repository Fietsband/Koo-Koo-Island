import { Animation } from '../../animation.js';
import { Progress } from '../../progress.js';

export const PlayerBus = (function () {
  function fillTurnBar (e) {
    const battle = e.params.battle;
    const player = e.params.battle.player;

    player.turnBar.empty(function () {
      player.turnBar.fill(
        function () {
          battle.inface.enable();
        },
        function (anim) {
          if (battle.finished) {
            anim.pause();
          }
        }
      );
    });
  }

  function fillHpBar (e) {
    const battle = e.params.battle;

    battle.player.hpBar.add(0, function () {}, 1);
  }

  function playerDamaged (e) {
    // blink the player a little bit (like FF VI style)
    const battle = e.params.battle;
    const player = battle.player;
    const damage = e.params.damage;

    Progress.setStat(function (stat) {
      stat.player.hp.left += damage;
    });

    const hpLeft = Progress.getStat('player', 'hp').left;

    battle.finished = hpLeft <= 0;
    player.hpBar.add(damage, function () {
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
    const battle = e.params.battle;
    const player = battle.player;
    const weapon = player.inventory.getEquipedWeapon();
    const enemy = e.params.battle.enemy;
    const animation = new Animation(
      weapon.type + 'PlayerAttackAnimation',
      document.querySelector('#battle .player'),
      enemy.takeDamage.bind(e.params.battle, weapon.damage)
    );
    animation.animate();
  }

  function playerFleed (e) {
    e.params.battle.finished = true;
  }

  function playerTurnPlayed (e) {
    const battle = e.params.battle;

    battle.inface.disable();
    fillTurnBar(e);
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          fillTurnBar(e);
          fillHpBar(e);
          break;
        case 'playerDamaged':
          playerDamaged(e);
          break;
        case 'playerAttacked':
          playerAttacked(e);
          break;
        case 'playerFleed':
          playerFleed(e);
          break;
        case 'playerDied':
          playerDied(e);
          break;
        case 'playerTurnPlayed':
          playerTurnPlayed(e);
          break;
      }
    }
  };
})();
