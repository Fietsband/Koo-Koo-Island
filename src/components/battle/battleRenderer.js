export const BattleRenderer = (function () {
  const parts = {
    '#battle_sequence_info_header': renderHeader,
    '.enemy #graphic': renderEnemyGraphic,
    '.enemy #health': renderEnemyHealth,
    '.enemy .attackbar': renderEnemyAttack,
    '.player #graphic': renderPlayerGraphic,
    '.player #health': renderPlayerHealth,
    '.player #magic': renderPlayerMagic,
    '.player .attackbar': renderPlayerAttack
  };

  function renderHeader (element, battle) {
    element.innerHTML = 'You are fighting "' + battle.enemy.name + '"';
  }

  function renderEnemyAttack (element, battle) {
    battle.enemy.turnBar.render(element);
  }

  function renderPlayerAttack (element, battle) {
    battle.player.turnBar.render(element);
  }

  function renderEnemyGraphic (element, battle) {
    battle.enemy.spawn(function () {
      element.innerHTML = this.node.innerHTML;
    });
  }

  function renderEnemyHealth (element, battle) {
    battle.enemy.hpBar.renderWithStats(element, {
      current: battle.enemy.hp,
      max: battle.enemy.hp
    });
  }

  function renderPlayerGraphic (element, battle) {
    element.innerHTML = battle.player.graphic.draw();
  }

  function renderPlayerHealth (element, battle) {
    battle.player.hpBar.renderWithStats(element, {
      current: battle.player.get('hp').left,
      max: battle.player.get('hp').total
    });
  }

  function renderPlayerMagic (element, battle) {
    const mp = battle.player.get('mp');
    if (mp > 0) {
      element.classList.remove('hidden');
      battle.player.hpBar.renderWithStats(element, {
        current: mp.left,
        max: mp.total
      });
    }
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
