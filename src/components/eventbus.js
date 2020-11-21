import { ProgressBus } from './eventbus/progressBus.js';
import { IslandBus } from './eventbus/islandBus.js';
import { InventoryBus } from './eventbus/inventoryBus.js';
import { SellerBus } from './eventbus/sellerBus.js';

export const Event = (function () {
  function Event(key, params) {
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
    InventoryBus
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
