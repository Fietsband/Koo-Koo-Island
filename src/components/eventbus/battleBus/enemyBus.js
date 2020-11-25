import { Animation } from '../../animation.js';
import { Rewarder } from '../../battle/rewarder.js';

export const EnemyBus = (function () {
  function fillTurnBar (e) {
    const battle = e.params.battle;
    const enemy = battle.enemy;

    enemy.turnBar.empty(function () {
      enemy.turnBar.fill(
        function () {
          enemy.attack(e.params.battle);
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
    const enemy = e.params.battle.enemy;

    enemy.hpBar.add(0, function () {}, 1);
  }

  function enemyDamaged (e) {
    // blink the enemy a little bit (like FF VI style)
    const enemy = e.params.battle.enemy;
    const damage = e.params.damage;

    e.params.battle.finished = (enemy.hpBar.current + damage) <= 0;
    enemy.hpBar.add(damage, function () {
      if (this.current <= 0) {
        enemy.die.call(e.params.battle);
      }
    });
  }

  function enemyAttacked (e) {
    const attack = e.params.attack;
    const player = e.params.battle.player;
    const animation = new Animation(
      attack.key + 'AttackAnimation',
      document.querySelector('#battle .enemy'),
      player.takeDamage.bind(e.params.battle, attack.damage)
    );

    animation.animate();
  }

  function enemyTurnPlayed (e) {
    fillTurnBar(e);
  }

  function enemyDied (e) {
    const player = e.params.battle.player;
    const enemy = e.params.battle.enemy;

    Rewarder.reward(player, enemy.rewards);
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          fillTurnBar(e);
          fillHpBar(e);
          break;
        case 'enemyAttacked':
          enemyAttacked(e);
          break;
        case 'enemyDamaged':
          enemyDamaged(e);
          break;
        case 'enemyDied':
          enemyDied(e);
          break;
        case 'enemyTurnPlayed':
          enemyTurnPlayed(e);
          break;
      }
    }
  };
})();
