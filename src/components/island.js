import { Progress } from './progress.js';

export const Island = (function () {
  function clickShell (e) {
    e.target.removeEventListener('click', clickShell);
    e.target.classList.remove('click');

    Progress.setStat('progress', 'hasClickedShell', true);
  }

  return {
    parts: {
      shell: {
        render: function () {
          const shell = document.createElement('span');
          shell.setAttribute('id', 'interactive_shell');
          if (!Progress.getStat('progress', 'hasClickedShell')) {
            shell.classList.add('click');
          }
          shell.innerHTML = 'o';
          return shell.outerHTML;
        },
        afterRender: function (element) {
          if (!Progress.getStat('progress', 'hasClickedShell')) {
            element.addEventListener('click', clickShell);
          }
        }
      }
    }
  };
})();
