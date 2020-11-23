import { BattleRenderer } from './battle/battleRenderer.js';
import { BattleInteractions } from './battle/battleInteractions.js';
import { Event, Eventbus } from './eventbus.js';
import { Enemy } from './enemy.js';
import { Player } from './player.js';
import anime from 'animejs/lib/anime.es.js';

export const Battle = (function () {
  const battleEl = document.getElementById('battle');
  const level = document.getElementById('level');

  function doThing() {
    this.enemy.turnBar.fill(function () {
      console.log('full enemy');
    });

    this.player.turnBar.fill(function () {
      console.log('full player');
    });
  }

  Battle.prototype = {
    start: function () {
      battleEl.classList.remove('hidden');
      level.classList.add('hidden');

      BattleRenderer.render(battleEl, this);
      BattleInteractions.enable(battleEl, this);

      console.log('load bars');

      anime({
        target: '.player .attack.bar .inner_bar',
        delay: 2000,
        width: '100%',
        easing: 'lineair',
        complete: function () {
          console.log("fin");
        }
      })

      anime({
        target: '.enemy .attack.bar .inner_bar',
        delay: 2000,
        width: '100%',
        easing: 'lineair',
        complete: function () {
          console.log("fin");
        }
      })
      //setTimeout(doThing.bind(this), 0);
      //Eventbus.apply(
      //  new Event('battleRendered', { battle: this })
      //);
    },

    finish: function () {
      level.classList.remove('hidden');
      renderTarget.innerHTML = '';

      BattleInteractions.disable(renderTarget, this);
    }
  };

  function Battle (enemyId) {
    this.enemy = new Enemy(enemyId);
    this.player = Player;
  }

  return Battle;
})();
