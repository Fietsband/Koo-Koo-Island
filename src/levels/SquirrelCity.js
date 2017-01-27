window.SquirrelCity = {
    initialize: function() {
        this.squirrelPopUp = new Popup("squirrel-city-mysterious-squirrel");
    },

    talkToSquirrel: function() {
        this.squirrelPopUp.show();
    },

    openDoor: function() {
        var entertheHouseButton = dom.find("#squirrel-warning button#enter-the-house");
        var squirrelWarningPopup = new Popup("squirrel-warning");
        squirrelWarningPopup.show();
        entertheHouseButton.onclick = function() {
            window.currentGame.levels.squirrel_city_first_level_house.addToGame();
            squirrelWarningPopup.hide();
        }
    },

    goToFirstLevel: function() {
        window.currentGame.levels.squirrel_city_second_level_house.addToGame();
    },

    goToSecondLevel: function() {
        window.currentGame.levels.squirrel_city_attic_level_house.addToGame();
    },

    goToGroundLevel: function() {
        window.currentGame.levels.squirrel_city_first_level_house.addToGame();
    },

    goOutside: function() {
        window.currentGame.levels.squirrel_city.addToGame();
    },

    grabSpear: function() {
        if (!window.currentGame.checkProgressOn("squirrel_house_spear")) {
            GameData.progress.squirrel_house_spear = 1;
            var item = new Weapon("spear");
            window.currentGame.player.inventory.addItem("weapons", item);
            window.SquirrelCity.disableSpear();
        }
    },

    disableSpear: function() {
        $.each(document.querySelectorAll(".squirrel-city-spear-wall"), function(i, spearPart) {
            spearPart.innerHTML = "&nbsp;";
            spearPart.classList.add("disabled");
            spearPart.onclick = null;
        });
    },

    destroy: function() {
        delete this.squirrelPopUp;
    }
}