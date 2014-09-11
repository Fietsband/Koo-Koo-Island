Enemy.prototype = {
  getEnemyStats: function(){
    return Enemies[identifier];
  }
}

function Enemy(identifier){
  this.identifier = identifier;
  this.enemyPre = document.querySelector(".enemies #" + identifier);
  this.enemyInformation = this.getEnemyStats();
  // build timer
  // attack
  // health
  // die!
}
