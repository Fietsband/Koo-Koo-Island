import { ProgressCallbacks } from './progress/callbacks.js';

export const Progress = (function () {
  const saveKey = 'kookooisland.save';
  const autoSaveCycle = 10000;
  let autoSaveTimeout;
  let stats = {
    player: {
      hp: 20,
      seashells: 0
    },
    progress: {
      hasClickedShell: false
    },
    settings: {
      autoSaveEnabled: true
    }
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
      ProgressCallbacks[key].call();
    },

    getStat: function (scope, key) {
      return stats[scope][key];
    },

    enableInterface: function () {
      const autoSaver = document.getElementById('interactive_autosave');
      const saveButton = document.getElementById('interactive_save');

      autoSaver.checked = stats.settings.autoSaveEnabled;
      toggleAutoSaver();

      autoSaver.addEventListener('click', clickAutoSaver);
      saveButton.addEventListener('click', this.save);
    },

    load: function () {
      const current = atob(localStorage.getItem(saveKey));
      stats = JSON.parse(current);

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
