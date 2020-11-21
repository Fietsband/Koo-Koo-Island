const EnemyNames = {
  fish_ltr: {
    name: 'Fish',
    hp: 20
  },
  fish_rtl: {
    name: 'Fish',
    hp: 20
  },
  fish_with_gun_ltr: {
    name: 'Armed Fish',
    hp: 20
  },
  fish_with_gun_rtl: {
    name: 'Armed Fish',
    hp: 20
  },
  big_fish_ltr: {
    name: 'Big Fish',
    hp: 50
  },
  big_fish_rtl: {
    name: 'Big Fish',
    hp: 50
  }
};

export const Enemy = (function () {
  Enemy.prototype = {
    spawn: function (method) {
      this.node = document.querySelector(
        '.enemy_' + this.key
      ).cloneNode(true);
      this.node.classList.remove('enemy_' + this.key);

      method.call(this);
    }
  };

  function Enemy (key) {
    this.key = key;
    Object.assign(this, EnemyNames[this.key]);
  }

  return Enemy;
}());
