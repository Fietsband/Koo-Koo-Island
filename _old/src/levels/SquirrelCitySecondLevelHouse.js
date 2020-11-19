window.SquirrelCitySecondLevelHouse = {
    initialize: function() {
        this.openClosetPopup = new Popup("squirrel-city-house-closet");
    },

    openCloset: function() {
        this.openClosetPopup.show();
    },

    destroy: function() {
        delete this.openClosetPopup;
    }
};