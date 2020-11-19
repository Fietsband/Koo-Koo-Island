export const Island = (function () {
  function clickShell (e) {
    e.target.removeEventListener('click', clickShell);
    e.target.classList.remove('click');
    console.log(e);
    // TODO: Whenever a player finds the shell start autocollecting.
  }

  return {
    parts: {
      shell: {
        render: function () {
          const shell = document.createElement('span');
          shell.setAttribute('id', 'interactive_shell');
          shell.classList.add('click');
          shell.innerHTML = 'o';
          return shell.outerHTML;
        },
        afterRender: function (element) {
          element.addEventListener('click', clickShell);
        }
      }
    }
  };
})();
