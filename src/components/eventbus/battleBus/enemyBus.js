export const EnemyBus = (function () {
  function battleRendered (e) {
    const enemy = e.params.battle.enemy;

    enemy.turnBar.fill(function () {
      enemy.attack(e.params.battle.player);
    });
  }

  function enemyAttack (e) {

  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          battleRendered(e);
          break;
        case 'enemyAttack':
          enemyAttack(e)
          break;
      }
    }
  };
})();
