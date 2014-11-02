var ExperienceCallbacks = (function(){
  ExperienceCallbacks = {
    increaseExperience: function(amount){
      GameData.player.experience += amount;
      checkExperiencePoints();
    }
  };

  function checkExperiencePoints(){
    $.each(experienceCallbacks(), function(i, experienceKey){
      if(GameData.player.experience > parseInt(experienceKey) &&
        GameData.player.experience_rewards.indexOf(experienceKey) === -1){
        experiencePointReward(experienceKey);
      }
    });
  }

  function experienceCallbacks(){
    return Object.keys(ExperiencePoints).filter(function(i){
      return parseInt(i) <= GameData.player.experience;
    });
  }

  function experiencePointReward(experienceKey){
    GameData.player.experience_rewards.push(experienceKey);
    $.each(ExperiencePoints[experienceKey], function(j, callback){
      window.currentBattle.eventEngine.add({
        perform: increase[callback.callback_method](callback.amount),
        message: "You leveled up!",
        timeOut: 2000
      });
    });
  }

  var increase = {
    increaseHitPoints: function(amount){
      GameData.player.hp[1] += amount;
    },

    increaseMagicPoints: function(amount){
      GameData.player.mp[1] += amount;
    }
  }

  return ExperienceCallbacks;
})();
