var Player = (function(){
  Player.prototype = {
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

    attack: function(){
      window.currentBattle.eventEngine.add({
        type:    "player_battle_move",
        message: "You attacked",
        perform: window.Animations.Attack.play
      });
    },

    magicAttack: function(magicAttackName){
      window.currentBattle.eventEngine.add({
        type:    "player_battle_move",
        message: "You cast " + magicAttackName,
        perform: window.Animations.Magic[magicAttackName].play
      });
    },

    calculateDamage: function(){
      return GameData.player.attack_damage * this.weapon().damage;
    },

    looseHealth: function(amount){
      GameData.player.hp[0] -= Math.round(amount);
      if(GameData.player.hp[0] <= 0){
        GameData.player.hp[0] = 0;
        window.currentBattle.eventEngine.add({
          type:    "death",
          message: "You lost",
          timeOut: 2000
        });

        window.currentBattle.eventEngine.add({
          type: "end",
          timeOut: 2000
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
      this.magicBar.set(GameData.player.mp[0], GameData.player.mp[1]);
      this.inventory.magicBar.set(GameData.player.mp[0], GameData.player.mp[1])
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

    prepareForBattle: function(){
      this.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
      $.each(["skills", "magic", "items"], function(i, scope){
        dom.find("#battle-sequence-popup ." + scope + " ul.list").innerHTML = "";
        $.each(GameData.player.inventory[scope], function(i, item){
          new BattleItem(item, scope).add();
        });
      });
    }
  }

  function Player(){
    this.inventory      = new Inventory();
    this.graphic        = dom.findId("game-character");
    this.battleGraphic  = dom.find("#battle-sequence-popup .player #graphic");
    this.attackBar      = new Bar(".field .player .attackbar .attack-left", GameData.player.battle_timeout);
    this.healthBar      = new StatBar(".player #health", ".health-stats-left", ".total-health", ".healthbar .inner-bar");
    this.magicBar       = new StatBar(".player #magic", ".magic-stats-left", ".total-magic", ".magicbar .inner-bar");
    this.healthBar.set(GameData.player.hp[0], GameData.player.hp[1]);
    this.magicBar.set(GameData.player.mp[0], GameData.player.mp[1]);
  }
  return Player;
})();
