Player.prototype = {
  setName: function(name){
    this.name = name;
  },

  buy: function(item){
    var sellPrice = sellPrices[item];
    if(GameData.player[sellPrice.type] >= sellPrice.value){
      var sellType = sellPrice.type.substring(0, sellPrice.type.length - 1);
      window.currentStats.increaseStat(item, 1);
      window.currentStats.increaseStat(sellType, (sellPrice.value * -1));
    }
  },

  canBuyItem: function(item){
    var playerInventoryItemCount = GameData.player[sellPrices[item].type];
    return playerInventoryItemCount >= sellPrices[item].value;
  },

  attack: function(enemy){
    window.currentBattle.eventEngine.add({
      type:    "player_battle_move",
      message: "You attacked",
      perform: window.Animations.Attack.play
    });
  },

  calculateDamage: function(){
    return GameData.player.attack_damage * this.weapon().damage;
  },

  looseHealth: function(amount){
    GameData.player.hp[0] -= amount;
    if(GameData.player.hp[0] <= 0){
      GameData.player.hp[0] = 0;
      window.currentBattle.eventEngine.add({
        message: "You lost",
        timeOut: 2000
      });
      window.currentBattle.eventEngine.add({
        type: "end",
        timeOut: 4000
      });
    }
    this.healthBar.update(GameData.player.hp[0]);
  },

  increaseHealth: function(amount){
    GameData.player.hp[0] += amount;
    if(GameData.player.hp[0] >= GameData.player.hp[1]){
      GameData.player.hp[0] = GameData.player.hp[1];
    }
    this.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
    this.inventory.healthBar.set(GameData.player.hp[0], GameData.player.hp[1])
  },

  increaseMagic: function(amount){
    GameData.player.mp[0] += amount;
    if(GameData.player.mp[0] >= GameData.player.mp[1]){
      GameData.player.mp[0] = GameData.player.mp[1];
    }
    // update magic bar
  },

  getGraphic: function(){
    return this.graphic.innerHTML;
  },

  spawn: function(){
    this.playerPlaceholder = dom.find("#battle-sequence-popup .field .player #graphic");
    this.playerPlaceholder.innerHTML = this.getGraphic();
  },

  unspawn: function(){
    this.playerPlaceholder.innerHTML = "";
  },

  setCurrentWeapon: function(weapon){
    window.GameData.player.weapon = weapon;
    this.updateWeaponGraphics(weapon);
  },

  updateWeaponGraphics: function(weapon){
    var weaponParts = this.graphic.querySelectorAll('.weapon');
    $.each(window.Weapons[weapon].graphic, function(i, graphicPart){
      weaponParts[i].innerHTML = graphicPart;
    });
    this.inventory.updateGraphicalWeaponPreview(weapon);
  },

  setCurrentArmor: function(armor){
    window.GameData.player.armor = armor;
    this.updateArmorGraphics(armor);
  },

  armor: function(){
    return window.Armors[window.GameData.player.armor];
  },

  weapon: function(){
    return window.Weapons[window.GameData.player.weapon];
  },

  updateArmorGraphics: function(armor){
    var armorParts = this.graphic.querySelectorAll('.armor');
    $.each(window.Armors[armor].graphic, function(i, graphicPart){
      armorParts[i].innerHTML = graphicPart;
    });
    this.inventory.updateGraphicalArmorPreview(armor);
  },

  loadCurrentArmor: function(){
    if(window.GameData.player.armor){
      this.inventory.setSelectedArmor(window.GameData.player.armor);
    }
  },

  loadCurrentWeapon: function(){
    if(window.GameData.player.weapon){
      this.inventory.setSelectedWeapon(window.GameData.player.weapon);
    }
  },

  removeArmorAndWeapons: function(){
    this.updateArmorGraphics("none");
    this.updateWeaponGraphics("none");
    window.GameData.player.armor = null;
    window.GameData.player.weapon = null;
    this.inventory.empty();
  }
}

function Player(){
  this.inventory      = new Inventory();
  this.graphic        = dom.findId("game-character");
  this.battleGraphic  = dom.find("#battle-sequence-popup .player #graphic");
  this.healthBar      = dom.find(".field .player .healthbar .health-left");
  this.healthStats    = dom.find(".field .player .health-stats .health-stats-left");
  this.attackBar      = new Bar(".field .player .attackbar .attack-left", GameData.player.battle_timeout);
  this.healthBar      = new StatBar(".player #health", ".health-stats-left", ".total-health", ".healthbar .inner-bar");
  //this.magicBar       = new StatBar(".player #magic", ".magic-stats-left", ".total-magic", ".magicbar .inner-bar");
  this.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
}
