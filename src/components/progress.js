import { ProgressCallbacks } from './progress/callbacks.js';
import { Stats } from './stats.js';

export const Progress = (function () {
  const saveKey = 'kookooisland.save';
  const autoSaveCycle = 10000; // 10 seconds
  let autoSaveTimeout;
  let stats = {
    player: {
      hp: 20,
      seashells: 0,
      oysters: 0,
      wood: 0,
      currentLevel: 'island'
    },
    progress: {
      hasClickedShell: false,
      hasFoundFish: false
    },
    settings: {
      autoSaveEnabled: true
    }
  };

  let internalStats = {
    currentLevel: null
  };

  function clickAutoSaver (e) {
    stats.settings.autoSaveEnabled = e.checked;
    toggleAutoSaver();
  }

  function toggleAutoSaver () {
    if (stats.settings.autoSaveEnabled) {
      clearInterval(autoSaveTimeout);
    } else {
      autoSaveTimeout = setInterval(this.save, autoSaveCycle);
    }
  }

  return {
    setStat: function (scope, key, val) {
      stats[scope][key] = val;
      const callback = ProgressCallbacks[key];
      if (callback) {
        callback.call();
      }
    },

    getStat: function (scope, key) {
      return stats[scope][key];
    },


    setInterfaceStat: function (key) {
      Stats.set(key, stats.player[key]);
    },

    increase: function (scope, key) {
      stats[scope][key] += 1;
      const callback = ProgressCallbacks[key + 'Increase'];
      if (callback) {
        callback.call();
      }
    },

    enableInterface: function () {
      const autoSaver = document.getElementById('interactive_autosave');
      const saveButton = document.getElementById('interactive_save');

      autoSaver.checked = stats.settings.autoSaveEnabled;
      toggleAutoSaver();
      this.setInterfaceStat('seashells');
      this.setInterfaceStat('oysters');
      this.setInterfaceStat('wood');

      autoSaver.addEventListener('click', clickAutoSaver);
      saveButton.addEventListener('click', this.save);
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
