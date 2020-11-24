export const InfoBus = (function () {
  function battleStarted (e, header) {
    header.innerHTML = 'You are fighting "' + e.params.battle.enemy.name + '"';
  }

  function enemyAttack (e, header) {
    const name = e.params.battle.enemy.name;
    const attack = e.params.attack.key;
    header.innerHTML = name + ' uses "' + attack  + '"';
  }

  function enemyDied (e, header) {
    const name = e.params.battle.enemy.name;
    header.innerHTML = 'You killed "' + name + '"';
  }

  function playerDied (e, header) {
    header.innerHTML = 'You died!';
  }

  function playerFleed (e, header) {
    header.innerHTML = 'You fleed the battle!';
  }

  return {
    apply: function (e) {
      const header = document.getElementById('battle_sequence_info_header');
      switch (e.key) {
        case 'battleRendered':
          battleStarted(e, header);
          break;
        case 'enemyAttack':
          enemyAttack(e, header);
          break;
        case 'enemyDied':
          enemyDied(e, header);
          break;
        case 'playerDied':
          playerDied(e, header);
          break;
        case 'playerFleed':
          playerFleed(e, header);
          break;
      }
    }
  };
})();
