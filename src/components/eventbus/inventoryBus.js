import { Progress } from '../player.js';
import { Player } from '../player.js';
import { LevelPart } from '../levelRenderer.js';

export const InventoryBus = (function () {
  function inventoryEnabled(e) {
    LevelPart('island', 'bottle', document).disable();
    Player.inventory.enable();
  }

  function mapAdded(e) {
    Player.inventory.add(e.params.scope, e.params.item);
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'inventoryEnabled':
        case 'hasInventoryInit':
          inventoryEnabled(e);
          break;
        case 'mapAdded':
          mapAdded(e);
          break;
      }
    }
  }
})();
