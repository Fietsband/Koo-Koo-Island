export const PlayerBus = (function () {
  function battleRendered(e) {
    e.params.battle.player.turnBar.fill(function () {
      console.log('full enemy');
    });
  }

  return {
    apply: function (e) {
      switch (e.key) {
        case 'battleRendered':
          battleRendered(e);
          break;
      }
    }
  };
})();
