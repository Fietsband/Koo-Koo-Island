ExperienceCallbacks = {
  increaseExperience: function(amount){
    GameData.player.experience += amount;
    ExperienceCallbacks.checkExperiencePoints();
  },

  increaseHitPoints: function(amount){
    GameData.player.hp[1] += amount;
  },

  checkExperiencePoints: function(){
    $.each(window.currentGame.callbacks.experienceCallbacks.experienceCallbacks(), function(i, experienceKey){
      if(GameData.player.experience > parseInt(experienceKey) &&
        GameData.player.experience_rewards.indexOf(experienceKey) === -1){
        window.currentGame.callbacks.experienceCallbacks.experiencePointReward(experienceKey);
      }
    });
  },

  experiencePointReward: function(experienceKey){
    GameData.player.experience_rewards.push(experienceKey);
    $.each(ExperiencePoints[experienceKey], function(j, callback){
      window.currentGame.callbacks.experienceCallbacks[callback.callback_method](callback.amount);
    });
  },

  experienceCallbacks: function(){
    return Object.keys(ExperiencePoints).filter(function(i){
      return parseInt(i) <= GameData.player.experience;
    });
  }
}
