window.LevelClickMethods.SquirrelCityAtticLevelHouse = {
    squirrelCityGotoFirstLevelBack: function() {
        window.SquirrelCity.goToFirstLevel();
    },

    addMagicalFireSpell: function() {
        if (!window.currentGame.checkProgressOn("squirrel_house_chimney")) {
            GameData.progress.squirrel_house_chimney = 1;
            dom.findId("add-magical-fire-spell").innerHTML = "_";
            new InventoryItem("fire", "magic").add();
        }
    }
};