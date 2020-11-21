export const BattleRenderer = (function () {
  const parts = {
    '#battle_sequence_info_header': renderHeader,
    '.enemy #graphic': renderEnemyGraphic,
    '.enemy #health': renderEnemyHealth
  };

  function renderHeader (element, battle) {
    element.innerHTML = 'You are fighting "' + battle.enemy.name + '"';
  }

  function renderEnemyGraphic (element, battle) {
    battle.enemy.spawn(function () {
      element.innerHTML = this.node.innerHTML;
    });
  }

  function renderEnemyHealth (element, battle) {
    const statsLeft = element.querySelector('.health_stats_left');
    const totalLeft = element.querySelector('.total_health');
    statsLeft.innerHTML = battle.enemy.hp;
    totalLeft.innerHTML = battle.enemy.hp;
  }

  return {
    render: function (template, battle) {
      for (const finder in parts) {
        const callback = parts[finder];
        const elem = template.querySelector(finder);

        callback(elem, battle);
      }
    }
  };
})();
