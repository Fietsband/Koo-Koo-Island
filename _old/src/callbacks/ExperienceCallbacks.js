var ExperienceCallbacks = (function() {
    ExperienceCallbacks = {
        increaseExperience: function(amount) {
            GameData.player.experience += amount;
            checkExperiencePoints();
        }
    };

    function checkExperiencePoints() {
        $.each(experienceCallbacks(), function(i, experienceKey) {
            if (GameData.player.experience > parseInt(experienceKey) &&
                GameData.player.experience_rewards.indexOf(experienceKey) === -1) {
                experiencePointReward(experienceKey);
            }
        });
    }

    function experienceCallbacks() {
        return Object.keys(ExperiencePoints).filter(function(i) {
            return parseInt(i) <= GameData.player.experience;
        });
    }

    function experiencePointReward(experienceKey) {
        GameData.player.experience_rewards.push(experienceKey);
        var experienceReward = ExperiencePoints[experienceKey];
        for (var experienceUpgrade in experienceReward) {
            window.currentBattle.eventEngine.add({
                perform: increase[experienceUpgrade](experienceReward[experienceUpgrade]),
                message: "You leveled up!",
                timeOut: 2000
            });
        }
    }

    var increase = {
        hp: function(amount) {
            GameData.player.hp[1] += amount;
        },

        mp: function(amount) {
            GameData.player.mp[1] += amount;
        },

        speed: function(amount) {
            GameData.player.battle_timeout += amount;
        }
    }

    return ExperienceCallbacks;
})();