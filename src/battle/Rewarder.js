Rewarder.prototype = {
  reward: function(){
    var self = this;
    $.each(this.rewardedItems(), function(i, reward){
      self[self.typeOfReward + "RewardCallback"](reward);
      if(ENV == "production" || ENV == "development"){
        self.setBattleMessage(reward);
      }
    });
  },

  setBattleMessage: function(reward){
    var self = this;
    self.messageTimeout = setTimeout(function(){
      window.currentBattle.infoHeader.update(self.rewardMessage(reward));
      clearTimeout(self.messageTimeout);
    }, 2000);
  },

  rewardMessage: function(reward){
    var message = "You get ";
    message += this.rewards[reward] + " " + reward;
    if(this.rewards[reward] > 1){
      message += "s";
    }
    return message;
  },

  statsRewardCallback: function(reward){
    window.currentStats.increaseStat(reward, this.rewards[reward]);
  },

  itemsRewardCallback: function(){

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
