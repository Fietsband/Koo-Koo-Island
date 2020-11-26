import { BattleRenderer } from './battle/renderer.js';
import { BattleInteractions } from './battle/interactions.js';
import { BattleTurnEngine } from './battle/turnEngine.js';
import { Event, Eventbus } from './eventbus.js';
import { Enemy } from './enemy.js';
import { Player } from './player.js';

export const Battle = (function () {
  const battleEl = document.getElementById('battle');
  const level = document.getElementById('level');
  const stats = document.getElementById('stats');

  Battle.prototype = {
    start: function () {
      battleEl.classList.remove('hidden');
      level.classList.add('hidden');
      stats.classList.add('hidden');

      BattleRenderer.render(battleEl, this);

      Eventbus.apply(
        new Event('battleRendered', { battle: this })
      );
    },

    finish: function () {
      level.classList.remove('hidden');
      stats.classList.remove('hidden');
      battleEl.classList.add('hidden');

      this.inface.disable();
      this.finishCallback();
    }
  };

  function Battle (enemyId, finishCallback) {
    this.enemy = new Enemy(enemyId);
    this.player = Player;
    this.turns = new BattleTurnEngine();
    this.inface = BattleInteractions(battleEl, this);
    this.finishCallback = finishCallback;
    this.finished = false;
  }

  return Battle;
})();
