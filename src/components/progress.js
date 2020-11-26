import { Stats } from './stats.js';
import { Event, Eventbus } from './eventbus.js';
import SaveData from '../../data/saveData.yaml';

export const Progress = (function () {
  const saveKey = 'kookooisland.save';
  let stats = SaveData;

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
