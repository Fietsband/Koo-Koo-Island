export const Modal = (function () {
  const modalLoader = document.getElementById('modal');
  const level = document.getElementById('level');

  function hideLevel () {
    level.classList.add('hidden');
  }

  return {
    cancel: function () {
      modalLoader.innerHTML = '';
      level.classList.remove('hidden');
    },

    open: function (name, callbacks) {
      const modal = document.getElementById('modal_' + name);
      modalLoader.innerHTML = modal.innerHTML;
      hideLevel();

      for (const callback in callbacks) {
        const inter = modalLoader.querySelector('#interactive_' + callback);
        inter.addEventListener('click', callbacks[callback]);
      }
    }
  };
})();
