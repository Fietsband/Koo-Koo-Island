window.Animations.Attack = {
  play: function(graphic){
    var player = window.currentGame.player;
    var enemy = window.currentBattle.enemy;
    var clearMove = null;

    move(player.battleGraphic)
      .x(enemy.enemyInformation.player_position.x)
      .y(enemy.enemyInformation.player_position.y)
      .duration('0.4s')
      .ease('in')
      .end();

    clearTimeout(clearMove);

    clearMove = setTimeout(function(){
      move(player.battleGraphic)
        .x(0)
        .duration('0.3s')
        .ease('out')
        .end(function(){
          window.currentBattle.controls.enable.bind(window.currentBattle)();
          enemy.looseHealth(player.calculateDamage());
        });

      clearTimeout(clearMove);
    }, 500);
  }
}
