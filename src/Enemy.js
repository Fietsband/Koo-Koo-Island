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
    picked_attack = Math.round(Math.random() * attacks.length);
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
      this.enemyInformation.health = 0;
      window.currentBattle.pause();
      setTimeout(function(){
        window.currentBattle.battlePopup.hide();
      }, 2000);
    }
    this.updateHealthBar();
  },

  updateHealthBar: function(){
    this.healthBar.style.width = this.currentHealth() + "%";
  },

  currentHealth: function(){
    return (this.enemyInformation.health / this.startHealth) * 100;
  }
}

function Enemy(identifier, callbacks){
  this.identifier         = identifier;
  this.callbacks          = callbacks;
  this.enemyPre           = document.querySelector(".enemies #" + identifier);
  this.healthBar          = document.querySelector(".field .enemy .healthbar .health-left");
  this.enemyInformation   = this.getEnemyStats();
  this.startHealth        = this.enemyInformation.health;
  this.attackHoldBar      = new Bar(".field .enemy .attackbar .attack-left", this.enemyInformation.attack_interval);
  this.attackInterval     = null;
  this.updateHealthBar();
}
