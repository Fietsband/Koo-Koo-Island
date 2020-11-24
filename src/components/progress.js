import { Stats } from './stats.js';
import { Event, Eventbus } from './eventbus.js';

export const Progress = (function () {
  const saveKey = 'kookooisland.save';
  let stats = {
    player: {
      hp: { total: 20, left: 20 },
      mp: { total: 0, left: 0 },
      turnSpeed: 5000,
      damageFactor: 1,
      seashells: 0,
      oysters: 0,
      wood: 0,
      currentLevel: 'island',
      inventory: {
        maps: [],
        armor: [],
        weapons: [ { type: 'bare', damage: 10, equiped: true } ],
        items: []
      }
    },
    progress: {
      hasClickedShell: false,
      hasFoundFish: false,
      hasFoundMessageInBottle: false,
      hasInventory: false
    },
    settings: {
      autoSaveEnabled: true
    }
  };

  return {
    setStat: function (method) {
      method.call(this, stats);
    },

    getStat: function (scope, key) {
      return stats[scope][key];
    },

    setInterfaceStat: function (key) {
      Stats.set(key, stats.player[key]);
    },

    load: function () {
      const devMode = document.getElementById('dev_mode_enabled');
      if (!devMode.classList.contains('reset')) {
        const current = atob(localStorage.getItem(saveKey));
        stats = JSON.parse(current);
      }

      for (const progress in stats.progress) {
        if (stats.progress[progress]) {
          Eventbus.apply(new Event(progress + 'Init'));
        }
      }
    },

    save: function () {
      const current = btoa(JSON.stringify(stats));
      localStorage.setItem(saveKey, current);
    }
  };
}());
