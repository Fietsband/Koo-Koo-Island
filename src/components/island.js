Island = (function () {
  function clickShell() {
    console.log('shell');
  }

  return {
    staticParts: {
      shell: "<span id='interactive_shell' class='click'>o</span>"
    },
    interactiveParts: {
      shell: function (element) {
        element.addEventListener('click', clickShell);
      }
    }
  }
})();
