Enemy.prototype = {
  startAttacking: function(){
    var self = this;
    this.attackHoldBar.resetBar();
    this.attackInterval = setInterval(function(){
      var toPerformAttack = self.pickAttack();
      self.attackWith(toPerformAttack);
    }, this.enemyInformation.attack_interval);
  },

  quitAttacking: function(){
    clearInterval(this.attackInterval);
  },

  pickAttack: function(){
    var attacks = [];
    for(var attack in this.enemyInformation.attacks){
      for(var i = 0; i < this.enemyInformation.attacks[attack].probability; i++){
        attacks.push(this.enemyInformation.attacks[attack]);
      }
    }
    picked_attack = Math.round(Math.random() * (attacks.length - 1));
    return attacks[picked_attack];
  },

  attackWith: function(attack){
    window.currentBattle.infoHeader.update(this.enemyInformation.name + " attacked with " + attack.name);
    window.Game.player.looseHealth(attack.damage);
    this.attackHoldBar.resetBar();
  },

  getEnemyStats: function(){
    return Enemies[this.identifier];
  },

  looseHealth: function(amount){
    this.enemyInformation.health -= amount;
    if(this.enemyInformation.health <= 0){
      window.currentBattle.endBattle(this.enemyInformation.health, function(){
        window.currentBattle.infoHeader.update("You've beaten " + this.enemyInformation.name);
      });
    }
    this.updateHealthBar();
  },

  updateHealthBar: function(){
    this.healthBar.style.width = this.currentHealth() + "%";
    this.healthStats.innerHTML = this.enemyInformation.health;
  },

  currentHealth: function(){
    return (this.enemyInformation.health / this.startHealth) * 100;
  },

  getGraphic: function(){
    return this.enemyPre.innerHTML;
  },

  setGraphicToBattleField: function(){
    this.enemyPlaceholder  = document.querySelector("#battle-sequence-popup .field .enemy #graphic");
    this.enemyPlaceholder.innerHTML = this.getGraphic();
  },

  setPosition: function(){
    this.enemyPosition = document.querySelector("#battle-sequence-popup .field .enemy");
    this.enemyPosition.style.top = this.enemyInformation.position.y + "px";
    this.enemyPosition.style.right = this.enemyInformation.position.x + "px";
  },

  spawn: function(){
    this.setPosition();
    this.setGraphicToBattleField();
  },

  unspawn: function(){
    this.enemyPlaceholder.innerHTML = "";
  }
}

function Enemy(identifier, callbacks){
  this.identifier             = identifier;
  this.callbacks              = callbacks;
  this.enemyPre               = document.querySelector(".enemies #" + identifier);
  this.healthBar              = document.querySelector(".field .enemy .healthbar .health-left");
  this.healthStats            = document.querySelector(".field .enemy .health-stats .health-stats-left");
  this.totalHealth            = document.querySelector(".field .enemy .health-stats .total-health");
  this.enemyInformation       = this.getEnemyStats();
  this.startHealth            = this.enemyInformation.health;
  this.totalHealth.innerHTML  = this.startHealth;
  this.attackHoldBar          = new Bar(".field .enemy .attackbar .attack-left", this.enemyInformation.attack_interval);
  this.attackInterval         = null;
  this.updateHealthBar();
}
