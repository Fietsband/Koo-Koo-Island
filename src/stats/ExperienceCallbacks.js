ExperiencePoints = {
  "9":  [{ callback_method: "increaseHitPoints", amount: 10 }],
  "19": [{ callback_method: "increaseHitPoints", amount: 20 }],
  "49": [{ callback_method: "increaseHitPoints", amount: 20 }]
}

ExperienceCallbacks = {
  increaseExperience: function(amount){
    GameData.player.experience += amount;
    ExperienceCallbacks.checkExperiencePoints();
  },

  increaseHitPoints: function(amount){
    GameData.player.hp += amount;
  },

  checkExperiencePoints: function(){
    var exp = GameData.player.experience;
    $.each(ExperienceCallbacks.experienceCallbacks, function(experienceKey){
      if(exp > parseInt(experienceKey)){
        $.each(ExperiencePoints[experienceKey], function(j, callback){
          ExperienceCallbacks[callback.callback_method](callback.amount);
        });
      }
    });
  },

  experienceCallbacks: function(){
    var performableCallbacks = Object.keys(ExperiencePoints).filter(function(i){
      return parseInt(i) > GameData.player.experience;
    });
    return performableCallbacks;
  }
}
