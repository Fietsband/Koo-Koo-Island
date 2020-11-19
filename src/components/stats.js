export const Stats = (function () {
  return {
    enable: function () {
      // TODO: Enable in the thing
    },
    set: function (key, val) {
      const counter = document.getElementById('count_' + key);
      counter.innerHTML = val;
    }
  }
})();
