export const Stats = (function () {
  return {
    set: function (key, val) {
      const counter = document.getElementById('count_' + key);
      counter.innerHTML = val;
    }
  };
})();
