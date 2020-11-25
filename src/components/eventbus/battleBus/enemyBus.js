import { Animation } from '../../animation.js';
import { Progress } from '../../progress.js';

export const EnemyBus = (function () {
  function fillTurnBar (e) {
    const enemy = e.params.battle.enemy;

    enemy.turnBar.fill(function () {
      enemy.attack(e.params.battle);
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

    enemy.died = (enemy.hpBar.current + damage) <= 0;
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
    const enemy = e.params.battle.enemy;
    enemy.turnBar.empty(function () {
      fillTurnBar(e);
    });
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
        case 'enemyTurnPlayed':
          enemyTurnPlayed(e);
          break;
      }
    }
  };
})();
