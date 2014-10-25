window.Events = {
  end: {
    invoke: function(){
      window.currentBattle.battlePopup.hide();
    }
  },

  player_battle_move: {
    invoke: function(){
      window.currentBattle.battleControls.disable();
    }
  },

  death: {
    invoke: function(){
      window.currentBattle.pause();
    }
  }
};
