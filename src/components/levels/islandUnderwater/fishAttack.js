import { Animation } from '../../animation.js';
import { Battle } from '../../battle.js';

export const FishAttack = (function () {
  const maxFish = 5;
  let fishSpawnInterval;
  let fishesInFrame = [];

  const fishes = [
    { name: 'fish_ltr', probability: 5 },
    { name: 'fish_rtl', probability: 5 },
    { name: 'fish_with_gun_ltr', probability: 2 },
    { name: 'fish_with_gun_rtl', probability: 2 },
    { name: 'big_fish_ltr', probability: 1 },
    { name: 'big_fish_rtl', probability: 1 }
  ];

  function pickFish () {
    const pickFishes = [];
    for (let i = 0; i < fishes.length; i++) {
      for (let j = 0; j < fishes[i].probability; j++) {
        pickFishes.push(fishes[i].name);
      }
    }
    return pickFishes[
      Math.round(Math.random() * (pickFishes.length - 1))
    ];
  }

  function startBattle (fishId) {
    const enemy = fishId.replace(/(_ltr|_rtl)/, '');
    const battle = new Battle(enemy);
    battle.start();
    clearFish();
  }

  function destroyFish () {
    this.remove();
    const index = fishesInFrame.indexOf(this);
    if (index > -1) {
      fishesInFrame.splice(index, 1);
    }
  }

  function spawnInFrame (fishId) {
    const node = document.querySelector(
      '.enemy_' + fishId
    ).cloneNode(true);

    const animation = new Animation(
      'fishAnimation', node, destroyFish
    );

    node.classList.remove('enemy_' + fishId);
    node.classList.add('click', 'moveable');
    node.style.top = (Math.round(Math.random() * 300)) + 'px';
    node.addEventListener('click', startBattle.bind(this, fishId));

    document.getElementById('level').appendChild(node);

    animation.animate();
    return node;
  }

  function spawnFish () {
    if (fishesInFrame.length < maxFish) {
      const fishId = pickFish();
      const fish = spawnInFrame(fishId);
      fishesInFrame.push(fish);
    }

    fishSpawnInterval = setTimeout(spawnFish, calculateInterval());
  }

  function calculateInterval () {
    return Math.round(Math.random() * 7000) + 1000;
  }

  function clearFish () {
    for (const i in fishesInFrame) {
      fishesInFrame[i].remove();
    }
  }

  return {
    spawn: spawnFish,
    destroy: function () {
      clearFish();
      clearTimeout(fishSpawnInterval);
    }
  };
})();
