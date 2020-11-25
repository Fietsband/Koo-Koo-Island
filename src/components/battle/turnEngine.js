import { Eventbus } from '../eventbus.js';

export const BattleTurnEngine = (function () {
  function playTurn () {
    if (this.locked || this.turns.length === 0) {
      return;
    }

    this.locked = true;
    const e = this.turns.shift();
    Eventbus.apply(e);
  }

  BattleTurnEngine.prototype = {
    add: function (turn) {
      this.turns.push(turn);
      playTurn.call(this);
    },

    unlock: function () {
      this.locked = false;
      playTurn.call(this);
    },

    lock: function () {
      this.locked = true;
    }
  };

  function BattleTurnEngine () {
    this.turns = [];
    this.locked = false;
  }

  return BattleTurnEngine;
})();
