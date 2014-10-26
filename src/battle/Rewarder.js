Rewarder.prototype = {
  reward: function(){
    $.each(this.rewardedItems(), this.rewardSingleItem.bind(this));
  },

  rewardSingleItem: function(i, reward){
    var self = this;
    window.currentBattle.eventEngine.add({
      message: self.rewardMessage(reward),
      timeOut: 2000
    });
    this[this.typeOfReward + "RewardCallback"](reward);
  },

  rewardMessage: function(reward){
    var message = "You receive ";
    if(this.typeOfReward == "stats"){
      message += this.rewards[reward] + " " + reward;
      if(this.rewards[reward] > 1){
        message += "s";
      }
    }
    else if(this.typeOfReward == "items")
      message += this.rewards[reward];
    else{
      message += this.rewards[reward] + " experience";
    }

    return message;
  },

  statsRewardCallback: function(reward){
    window.currentStats.increaseStat(reward, this.rewards[reward]);
  },

  itemsRewardCallback: function(reward){
    var itemIdentifier = this.rewards[reward];
    switch(reward){
      case "weapon":
        var item = new Weapon(itemIdentifier);
        window.currentGame.player.inventory.addItem("weapons", item);
      break;

      case "item":
        var item = new InventoryItem(itemIdentifier, "items");
        window.currentGame.player.inventory.addItem("items", item);
      break;

      case "map":
        GameData.player.map = itemIdentifier;
      break;
    };
  },

  experienceRewardCallback: function(reward){
    window.currentGame.callbacks.experienceCallbacks.increaseExperience(this.rewards[reward]);
  },

  rewardedItems: function(){
    return Object.keys(this.rewards);
  }
}

function Rewarder(typeOfReward, rewards){
  this.typeOfReward = typeOfReward;
  this.rewards      = rewards[typeOfReward];
}
