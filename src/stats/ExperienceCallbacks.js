ExperiencePoints = {
  "9":  [{ callback_method: "increaseHitPoints", amount: 10 }],
  "19": [{ callback_method: "increaseHitPoints", amount: 20 }],
  "49": [{ callback_method: "increaseHitPoints", amount: 20 }]
}

ExperienceCallbacks = {
  increaseExperience: function(amount){
    GameData.player.experience += amount;
    ExperienceCallbacks.callback();
  },

  increaseHitPoints: function(amount){
    GameData.player.hp += amount;
  },

  callback: function(){
    var exp = GameData.player.experience;
    console.log(Object.keys(ExperiencePoints));
    // $.each(Object.keys(ExperiencePoints), function(i, experienceKey){
    //   if(exp > parseInt(experienceKey)){
    //     $.each(ExperiencePoints[experienceKey], function(j, callback){
    //       ExperienceCallbacks[callback.callback_method](callback.amount);
    //     });
    //   }
    // });
  }
}
