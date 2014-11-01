window.ExperiencePoints = {
  "9":  [{ callback_method: "increaseHitPoints", amount: 10 }],
  "19": [{ callback_method: "increaseHitPoints", amount: 20 }],
  "49": [{ callback_method: "increaseHitPoints", amount: 20 }, { callback_method: "increaseMagicPoints", amount: 20 }]
};

$.freeze(window.ExperiencePoints);
