import { BattleRenderer } from './battle/battleRenderer.js';
import { BattleInteractions } from './battle/battleInteractions.js';
import { Event, Eventbus } from './eventbus.js';
import { Enemy } from './enemy.js';
import { Player } from './player.js';

export const Battle = (function () {
  const battleEl = document.getElementById('battle');
  const level = document.getElementById('level');

  Battle.prototype = {
    start: function () {
      battleEl.classList.remove('hidden');
      level.classList.add('hidden');

      BattleRenderer.render(battleEl, this);

      Eventbus.apply(
        new Event('battleRendered', { battle: this })
      );
    },

    finish: function () {
      level.classList.remove('hidden');
      battleEl.classList.addClass('hidden');

      this.inface.disable();
    }
  };

  function Battle (enemyId) {
    this.enemy = new Enemy(enemyId);
    this.player = Player;
    this.inface = BattleInteractions(battlEl, this);
  }

  return Battle;
})();
