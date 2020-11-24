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

    enemy.hpBar.add(damage, function () {
      console.log(this.current);
      if (this.current <= 0) {
        enemy.die.call(e.params.battle);
      }
    });
  }

  function enemyAttack (e) {
    if (e.params.battle.paused) {
      return;
    }

    const attack = e.params.attack;
    const enemy = e.params.battle.enemy;
    const player = e.params.battle.player;
    const animation = new Animation(
      attack.key + 'AttackAnimation',
      document.querySelector('#battle .enemy'),
      player.takeDamage.bind(e.params.battle, attack.damage)
    );

    enemy.turnBar.empty();
    animation.animate();
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'playerDamaged':
          fillTurnBar(e);
          break;
        case 'battleRendered':
          fillTurnBar(e);
          fillHpBar(e);
          break;
        case 'enemyAttack':
          enemyAttack(e);
          break;
        case 'enemyDamaged':
          enemyDamaged(e);
          break;
      }
    }
  };
})();
