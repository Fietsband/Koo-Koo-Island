Island = (function () {
  function clickShell() {
    console.log('shell');
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
  }
})();
