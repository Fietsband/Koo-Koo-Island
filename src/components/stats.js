export const Stats = (function () {
  return {
    set: function (key, val) {
      const counter = document.getElementById('count_' + key);
      const counterWrapper = document.getElementById('stats_' + key);
      counter.innerHTML = val;

      if (val > 0) {
        counterWrapper.classList.remove('hidden');
      }
    }
  };
})();
