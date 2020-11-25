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
    pauseFish();

    const enemy = fishId.replace(/(_ltr|_rtl)/, '');
    const battle = new Battle(enemy, resumeFish);
    battle.start();
  }

  function destroyFish () {
    this.remove();
    const scope = this;
    const index = fishesInFrame.findIndex(function (el) {
      return el.fish === scope;
    });

    if (index > -1) {
      fishesInFrame.splice(index, 1);
    }
  }

  function spawnInFrame (fishId) {
    const node = document.querySelector(
      '.enemy_' + fishId
    ).cloneNode(true);

    node.classList.remove('enemy_' + fishId);
    node.classList.add('click', 'moveable');
    node.style.top = (Math.round(Math.random() * 300)) + 'px';
    node.addEventListener('click', startBattle.bind(this, fishId));

    document.getElementById('level').appendChild(node);

    return node;
  }

  function spawnFish () {
    if (fishesInFrame.length < maxFish) {
      const fishId = pickFish();
      const fish = spawnInFrame(fishId);
      const animation = new Animation(
        'fishAnimation', fish, destroyFish
      );

      fishesInFrame.push({ fish: fish, animation: animation.animate() });
    }

    fishSpawnInterval = setTimeout(spawnFish, calculateInterval());
  }

  function calculateInterval () {
    return Math.round(Math.random() * 7000) + 1000;
  }

  function pauseFish () {
    clearTimeout(fishSpawnInterval);

    for (const i in fishesInFrame) {
      fishesInFrame[i].animation.pause();
    }
  }

  function resumeFish () {
    for (const i in fishesInFrame) {
      fishesInFrame[i].animation.play();
    }

    fishSpawnInterval = setTimeout(spawnFish, calculateInterval());
  }

  return {
    spawn: spawnFish,
    destroy: function () {
      clearTimeout(fishSpawnInterval);
    }
  };
})();
