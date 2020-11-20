import { Modal } from '../../modal.js';
import { Progress } from '../../progress.js';

export const Fish = (function () {
  const oysterPrice = 10;
  const woodPrice = 20;

  function buyPopup () {
    Modal.open('fish_buy_seller', {
      cancel: function () {
        Modal.cancel();
      },
      oyster: function () {
        const message = this.querySelector('#fish_buy_message');
        const seashells = Progress.getStat('player', 'seashells');
        if (seashells < oysterPrice) {
          message.innerHTML = 'not enough seashells!';
        } else {
          Progress.setStat('player', 'seashells', seashells - oysterPrice);
          Progress.increase('player', 'oysters');
          message.innerHTML = 'thanks!';
        }
      },
      wood: function () {
        const message = this.querySelector('#fish_buy_message');
        const seashells = Progress.getStat('player', 'seashells');
        if (seashells < woodPrice) {
          Progress.setStat('player', 'seashells', seashells - woodPrice);
          Progress.increase('player', 'wood');
          message.innerHTML = 'not enough seashells!';
        } else {
          message.innerHTML = 'thanks!';
        }
      }
    });
  }
  return {
    popup: function () {
      Modal.open('fish_seller', {
        buy: buyPopup,
        cancel: Modal.cancel
      });
    }
  };
}());
