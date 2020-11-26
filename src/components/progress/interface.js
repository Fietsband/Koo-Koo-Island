import { Progress } from '../progress.js';

export const ProgressInterface = (function () {
  const autoSaveCycle = 10000; // 10 seconds
  let autoSaveTimeout;

  function clickAutoSaver (e) {
    Progress.setStat(function (stat) {
      stat.settings.autoSaveEnabled = e.checked;
    });
    toggleAutoSaver();
  }

  function toggleAutoSaver () {
    const enabled = Progress.getStat('settings', 'autoSaveEnabled');
    if (enabled) {
      clearInterval(autoSaveTimeout);
    } else {
      autoSaveTimeout = setInterval(Progress.save, autoSaveCycle);
    }
  }

  return {
    enable: function () {
      const autoSaver = document.getElementById('interactive_autosave');
      const saveButton = document.getElementById('interactive_save');

      autoSaver.checked = Progress.getStat('settings', 'autoSaveEnabled');

      Progress.setInterfaceStat('seashells');
      Progress.setInterfaceStat('oysters');
      Progress.setInterfaceStat('wood');

      toggleAutoSaver();
      autoSaver.addEventListener('click', clickAutoSaver);
      saveButton.addEventListener('click', Progress.save);
    }
  };
})();
