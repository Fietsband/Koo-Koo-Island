import { Modal } from '../../modal.js';
import { Progress } from '../../progress.js';

export const Fish = (function () {
  const products = {
    oysters: 10,
    wood: 20
  }

  function buy(product) {
    const message = this.querySelector('#fish_buy_message');
    const seashells = Progress.getStat('player', 'seashells');
    const price = products[product];

    if (seashells < price) {
      message.innerHTML = 'not enough seashells!';
    } else {
      Progress.setStat(product, function (stat) {
        stat.player.seashells = seashells - price;
        stat.player[product] += 1;
      })
      message.innerHTML = 'thanks!';
    }
  }

  function buyPopup () {
    Modal.open('fish_buy_seller', {
      cancel: function () {
        Modal.cancel();
      },
      oyster: function () {
        buy.call(this, 'oysters')
      },
      wood: function () {
        buy.call(this, 'wood')
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
