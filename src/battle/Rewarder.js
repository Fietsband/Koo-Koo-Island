Rewarder.prototype = {
  reward: function(){
    var self = this;
    $.each(this.rewardedItems(), function(i, reward){
      if(!(ENV == "test")){
        self.setBattleMessage(reward);
      }
    });
  },

  setBattleMessage: function(reward){
    var self = this;
    window.currentBattle.eventEngine.add({
      perform: self[self.typeOfReward + "RewardCallback"].bind(self, reward),
      message: self.rewardMessage(reward),
      timeOut: 2000
    });
  },

  rewardMessage: function(reward){
    var message = "You get ";
    if(this.typeOfReward == "stats" || this.typeOfReward == "items"){
      message += this.rewards[reward] + " " + reward;
      if(this.rewards[reward] > 1){
        message += "s";
      }
    }
    else{
      message += this.rewards[reward] + " experience";
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
