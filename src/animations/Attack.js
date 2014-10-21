window.Animations.Attack = {
  play: function(graphic){
    var enemy = window.currentBattle.enemy;
    var clearMove = null;

    move(window.currentGame.player.battleGraphic)
      .x(enemy.enemyInformation.player_position.x)
      .y(enemy.enemyInformation.player_position.y)
      .duration('0.4s')
      .ease('in')
      .end();

    clearTimeout(clearMove);

    clearMove = setTimeout(function(){
      move(window.currentGame.player.battleGraphic)
        .x(0)
        .duration('0.3s')
        .ease('out')
        .end(function(){
          window.currentBattle.controls.enable.bind(window.currentBattle)();
          enemy.looseHealth(GameData.player.attack_damage);
        });

      clearTimeout(clearMove);
    }, 500);
  }
}
