export const Enemy = (function () {
  Enemy.prototype = {
    spawn: function (method) {
      this.node = document.querySelector(
        '.enemy_' + this.key
      ).cloneNode(true);
      this.node.classList.remove('enemy_' + this.key);

      method.call(this);
    },

    destroy: function () {

    }
  };

  function Enemy (key) {
    this.key = key;
  }

  return Enemy;
}());
