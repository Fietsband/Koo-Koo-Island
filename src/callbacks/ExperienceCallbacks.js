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
    $.each(window.Game.callbacks.experienceCallbacks.experienceCallbacks, function(experienceKey){
      if(exp > parseInt(experienceKey)){
        $.each(ExperiencePoints[experienceKey], function(j, callback){
          window.Game.callbacks.experienceCallbacks[callback.callback_method](callback.amount);
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
