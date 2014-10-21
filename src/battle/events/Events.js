window.Events = {
  end: {
    invoke: function(){
      window.currentBattle.stop();
    }
  },

  player_battle_move: {
    invoke: function(){
      window.currentBattle.battleControls.disable();
    }
  }
};
