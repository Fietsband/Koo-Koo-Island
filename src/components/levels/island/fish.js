import { Modal } from '../../modal.js';
import { Progress } from '../../progress.js';
import { Event, Eventbus } from '../../eventbus.js';

export const Fish = (function () {
  const products = {
    oysters: 10,
    wood: 20
  };

  function buy (product) {
    const message = this.querySelector('#fish_buy_message');
    const seashells = Progress.getStat('player', 'seashells');
    const price = products[product];

    if (seashells < price) {
      message.innerHTML = 'not enough seashells!';
    } else {
      Eventbus.apply(
        new Event(
          'seashellsTraded', {
            product: product,
            price: price
          }
        )
      );
      message.innerHTML = 'thanks!';
    }
  }

  function buyPopup () {
    Modal.open('fish_buy_seller', {
      cancel: function () {
        Modal.cancel();
      },
      oyster: function () {
        buy.call(this, 'oysters');
      },
      wood: function () {
        buy.call(this, 'wood');
      }
    });
  }
  return {
    enable: function (element) {
      if (Progress.getStat('progress', 'hasFoundFish')) {
        if (element.classList.contains('empty')) {
          element.classList.add('hidden');
        } else {
          if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('click');
            element.addEventListener('click', Fish.popup);
          }
        }
      }
    },

    popup: function () {
      Modal.open('fish_seller', {
        buy: buyPopup,
        cancel: Modal.cancel
      });
    }
  };
}());
