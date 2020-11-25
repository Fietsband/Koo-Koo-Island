import { ProgressBus } from './eventbus/progressBus.js';
import { IslandBus } from './eventbus/islandBus.js';
import { InventoryBus } from './eventbus/inventoryBus.js';
import { SellerBus } from './eventbus/sellerBus.js';
import { BattleBus } from './eventbus/battleBus.js';
import { PlayerBus } from './eventbus/battleBus/playerBus.js';
import { EnemyBus } from './eventbus/battleBus/enemyBus.js';
import { InfoBus } from './eventbus/battleBus/infoBus.js';

export const Event = (function () {
  function Event (key, params) {
    this.key = key;
    this.params = params;
  }

  return Event;
})();

export const Eventbus = (function () {
  const busses = [
    ProgressBus,
    IslandBus,
    SellerBus,
    InventoryBus,
    PlayerBus,
    EnemyBus,
    InfoBus,
    BattleBus
  ];

  return {
    applyMultiple: function (events) {
      events.forEach(Eventbus.apply);
    },

    apply: function (e) {
      busses.forEach(function (bus) {
        bus.apply(e);
      });
    }
  };
}());
