Player.prototype = {
  setName: function(name){
    this.name = name;
  },

  buy: function(item){
    var sellPrice = sellPrices[item];
    if(GameData.player[sellPrice.type] >= sellPrice.value){
      var sellType = sellPrice.type.substring(0, sellPrice.type.length - 1);
      window.Stats.increaseStat(item, 1);
      window.Stats.increaseStat(sellType, (sellPrice.value * -1));
    }
  },

  canBuyItem: function(item){
    var playerInventoryItemCount = GameData.player[sellPrices[item].type];
    return playerInventoryItemCount >= sellPrices[item].value;
  },

  attack: function(enemy){
    window.currentBattle.battleEngine.disable();
    window.currentBattle.infoHeader.update("You attacked");

    var self = this;

    move(this.battleGraphic)
      .x(enemy.enemyInformation.player_position.x)
      .y(enemy.enemyInformation.player_position.y)
      .duration('0.4s')
      .ease('in')
      .end();

    clearTimeout(this.clearMove);

    this.attackBar.resetBar();
    this.clearMove = setTimeout(function(){
      move(self.battleGraphic)
        .x(0)
        .duration('0.3s')
        .ease('out')
        .end(function(){
          enemy.looseHealth(GameData.player.attack_damage);
        });

      clearTimeout(self.clearMove);
    }, 500);
  },

  looseHealth: function(amount){
    GameData.player.hp -= amount;
    if(GameData.player.hp <= 0){
      GameData.player.hp = 0;
      window.currentBattle.endBattle(GameData.player.hp,
        function(){
          window.currentBattle.infoHeader.update("You lost!");
        },
        function(){
          GameData.player.hp = 1;
        }
      );
    }
    this.updateHealthBar();
  },

  initiateFight: function(){
    this.updateHealthBar();
    this.attackBar.resetBar();
    this.totalHealth = document.querySelector(".field .player .health-stats .total-health");
    this.totalHealth.innerHTML = this.startHealth;
  },

  updateHealthBar: function(){
    this.healthBar.style.width = this.currentHealth() + "%";
    this.healthStats.innerHTML = GameData.player.hp;
  },

  currentHealth: function(){
    return (GameData.player.hp / this.startHealth) * 100;
  },

  getGraphic: function(){
    return this.graphic.innerHTML;
  },

  spawn: function(){
    this.playerPlaceholder = document.querySelector("#battle-sequence-popup .field .player #graphic");
    this.playerPlaceholder.innerHTML = this.getGraphic();
  },

  unspawn: function(){
    this.playerPlaceholder.innerHTML = "";
  }
}

function Player(){
  this.inventory      = new Inventory();
  this.graphic        = document.getElementById("game-character");
  this.battleGraphic  = document.querySelector("#battle-sequence-popup .player #graphic");
  this.healthBar      = document.querySelector(".field .player .healthbar .health-left");
  this.healthStats    = document.querySelector(".field .player .health-stats .health-stats-left");
  this.startHealth    = GameData.player.hp;
  this.attackBar      = new Bar(".field .player .attackbar .attack-left", GameData.player.battle_timeout);
}
