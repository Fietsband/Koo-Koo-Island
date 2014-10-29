var Enemy = (function(){
  Enemy.prototype = {
    startAttacking: function(){
      this.attackHoldBar.resetBar();
      this.attackInterval = setInterval(
        this.attack.bind(this),
        this.enemyInformation.attack_interval
      );
    },

    attack: function(){
      var toPerformAttack = this.pickAttack();
      var self = this;
      window.currentBattle.eventEngine.add({
        message: (this.enemyInformation.name + " attacked with " + toPerformAttack.name),
        perform: function(){
          self.attackWith(toPerformAttack);
        },
        eventTime: 2000
      });
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
      window.currentGame.player.looseHealth(this.calculateAttackDamage(attack));
      this.attackHoldBar.resetBar();
    },

    calculateAttackDamage: function(attack){
      return (attack.damage -
        (attack.damage * window.currentGame.player.armor().damage_reduction));
    },

    getEnemyStats: function(){
      return Enemies[this.identifier];
    },

    looseHealth: function(amount){
      this.enemyInformation.health -= amount;
      if(this.enemyInformation.health <= 0){
        this.enemyInformation.health = 0;

        window.currentBattle.eventEngine.add({
          type: "death",
          timeOut: 2000
        });

        rewardPlayer.bind(this)();
        this.quitAttacking();

        if(this.enemyInformation.endingCallback){
          this.enemyInformation.endingCallback();
        }

        window.currentBattle.eventEngine.add({
          type: "end",
          timeOut: 5000
        });
      }
      this.healthBar.update(this.enemyInformation.health);
    },

    rememberTotalHealth: function(){
      this.totalHealth = this.enemyInformation.health;
    },

    restoreHealth: function(){
      this.enemyInformation.health = this.totalHealth;
    },

    getGraphic: function(){
      return this.enemyPre.innerHTML;
    },

    spawn: function(){
      setPosition.bind(this)();
      setGraphicToBattleField.bind(this)();
      this.rememberTotalHealth();
    },

    unspawn: function(){
      this.enemyPlaceholder.innerHTML = "";
    }
  }

  function rewardPlayer(){
    var self = this;
    $.each(['experience', 'stats', 'items'], function(i, rewardType){
      if(self.enemyInformation.rewards[rewardType]){
        new Rewarder(rewardType, self.enemyInformation.rewards).reward();
      }
    });
  }

  function setPosition(){
    this.enemyPosition = dom.find("#battle-sequence-popup .field .enemy");
    this.enemyPosition.style.top = this.enemyInformation.position.y + "px";
    this.enemyPosition.style.right = this.enemyInformation.position.x + "px";
  }

  function setGraphicToBattleField(){
    this.enemyPlaceholder  = dom.find("#battle-sequence-popup .field .enemy #graphic");
    this.enemyPlaceholder.innerHTML = this.getGraphic();
  }

  function Enemy(identifier, callbacks){
    this.identifier             = identifier;
    this.callbacks              = callbacks;
    this.enemyPre               = dom.find(".enemies #" + identifier);
    this.enemyInformation       = this.getEnemyStats();
    this.attackHoldBar          = new Bar(".field .enemy .attackbar .attack-left", this.enemyInformation.attack_interval);
    this.healthBar              = new StatBar(".field .enemy", ".health-stats .health-stats-left", ".health-stats .total-health", ".healthbar .health-left");
    this.attackInterval         = null;
    this.healthBar.set(this.enemyInformation.health, this.enemyInformation.health);
  }

  return Enemy;
})();
