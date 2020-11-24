import { Animation } from '../../animation.js';

export const EnemyBus = (function () {
  function fillTurnBar (e) {
    const enemy = e.params.battle.enemy;

    enemy.hpBar.add(0, function () {}, 1);
    enemy.turnBar.fill(function () {
      enemy.attack(e.params.battle);
    });
  }

  function enemyAttack (e) {
    const attack = e.params.attack;
    const enemy = e.params.battle.enemy;
    const player = e.params.battle.player;
    const animation = new Animation(
      attack.key + 'AttackAnimation',
      enemy.node,
      player.takeDamage.bind(e.params.battle, attack.damage)
    );

    enemy.turnBar.empty();
    animation.animate();
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'playerDamaged':
        case 'battleRendered':
          fillTurnBar(e);
          break;
        case 'enemyAttack':
          enemyAttack(e);
          break;
      }
    }
  };
})();
