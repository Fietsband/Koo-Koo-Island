import { BattleRenderer } from './battle/battleRenderer.js';
import { Enemy } from './enemy.js';

export const Battle = (function () {
  const renderTarget = document.getElementById('battle');
  const template = document.getElementById('template_battle');
  const level = document.getElementById('level');

  Battle.prototype = {
    start: function () {
      const clonedTemplate = template.cloneNode(true);
      renderTarget.innerHTML = clonedTemplate.innerHTML;
      level.classList.add('hidden');
      BattleRenderer.render(renderTarget, this);
    },

    finish: function () {
      level.classList.remove('hidden');
      renderTarget.innerHTML = '';
    }
  };

  function Battle (enemyId) {
    this.enemy = new Enemy(enemyId);
  }

  return Battle;
})();
