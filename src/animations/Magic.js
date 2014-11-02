window.Animations.Magic = {
  fire: {
    play: function(){
      var player    = window.currentGame.player;
      var enemy     = window.currentBattle.enemy;
      //var clearMove = null;

      // make a projectile (creatElement) - move it towards the enemy;
      // at the end of the move (descrease damage - decrease mp)

      // clearMove = setTimeout(function(){
      //   move(player.battleGraphic)
      //     .x(0)
      //     .duration('0.3s')
      //     .ease('out')
      //     .end(function(){
      //       window.currentBattle.controls.enable.call(window.currentBattle);
      //       enemy.looseHealth(player.calculateDamage());
      //     });

      //   clearTimeout(clearMove);
      // }, 500);
    }
  }
}
