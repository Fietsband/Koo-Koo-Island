import { Progress } from '../progress.js';

export const SellerBus = (function () {
  function objectBought (e) {
    const price = e.params.price;
    const product = e.params.product;
    const seashells = Progress.getStat('player', 'seashells');

    Progress.setStat(function (stat) {
      stat.player.seashells = seashells - price;
      stat.player[product] += 1;
    });

    Progress.setInterfaceStat(product);
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'seashellsTraded':
          objectBought(e);
          break;
      }
    }
  };
})();
