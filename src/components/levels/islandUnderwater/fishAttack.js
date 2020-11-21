import { Enemy } from '../../enemy.js';
import { Animation } from '../../animation.js';

export const FishAttack = (function () {
  const maxFish = 5;
  let fishSpawnInterval;
  let fishesInFrame = 0;

  const fishes = [
    { name: 'fish_ltr', probability: 5 },
    { name: 'fish_rtl', probability: 5 },
    { name: 'fish_with_gun_ltr', probability: 2 },
    { name: 'fish_with_gun_rtl', probability: 2 },
    { name: 'big_fish_ltr', probability: 1 },
    { name: 'big_fish_rtl', probability: 1 }
  ];

  function pickFish () {
    let pickFishes = [];
    for (let i = 0; i < fishes.length; i++) {
      for (let j = 0; j < fishes[i].probability; j++) {
        pickFishes.push(fishes[i].name);
      }
    }
    return pickFishes[
      Math.round(Math.random() * (pickFishes.length - 1))
    ];
  }

  function startBattle () {
    // TODO: Initialize a battle
    return;
  }

  function destroyFish () {
    fishesInFrame--;
    console.log("DESTRUCTION BABY YEAH");
    this.node.remove();
  }

  function spawnFish () {
    if (fishesInFrame < maxFish) {
      const fish = new Enemy(pickFish());

      fish.spawn(function () {
        this.node.classList.add('click', 'moveable');
        this.node.style.top = (Math.round(Math.random() * 300)) + "px";
        this.node.addEventListener('click', startBattle);

        document.getElementById('level').appendChild(this.node);
        const animation = new Animation(
          'fishAnimation', this, destroyFish
        );
        animation.animate();
      });

      fishesInFrame++;
    }

    fishSpawnInterval = setTimeout(spawnFish, calculateInterval());
  }

  function calculateInterval () {
    return Math.round(Math.random() * 7000) + 1000;
  }

  return {
    spawn: spawnFish,
    destroy: function () {
      clearTimeout(fishSpawnInterval);
    }
  };
})();
