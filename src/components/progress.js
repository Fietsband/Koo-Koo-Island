import { ProgressCallbacks } from './progress/callbacks.js';
import { Stats } from './stats.js';

export const Progress = (function () {
  const saveKey = 'kookooisland.save';
  let stats = {
    player: {
      hp: 20,
      seashells: 0,
      oysters: 0,
      wood: 0,
      currentLevel: 'island',
      inventory: []
    },
    progress: {
      hasClickedShell: false,
      hasFoundFish: false,
      hasFoundMessageInBottle: false
    },
    settings: {
      autoSaveEnabled: true
    }
  };

  function statCallback (key) {
    const callback = ProgressCallbacks[key];
    if (callback) {
      callback.call();
    }
  }

  return {
    setStat: function (key, method) {
      method.call(this, stats);
      statCallback(key);
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

      for (const key in stats.progress) {
        if (stats.progress[key]) {
          ProgressCallbacks[key].call();
        }
      }
    },

    save: function () {
      const current = btoa(JSON.stringify(stats));
      localStorage.setItem(saveKey, current);
    }
  };
}());
