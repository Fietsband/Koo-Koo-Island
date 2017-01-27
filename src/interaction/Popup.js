Popup.prototype = {
    show: function() {
        this.popup.style.display = "block";
        this.openCallback();
    },

    hide: function() {
        this.popup.style.display = "none";
        this.closeCallback();
    },

    addCloseListener: function() {
        var self = this;
        this.closeButton.onclick = function() {
            self.hide();
        }
    }
};

function Popup(identifier, openCallback, closeCallback) {
    this.popup = dom.findId(identifier);
    this.closeButton = dom.findId(identifier + "-close");
    this.openCallback = openCallback || function() {};
    this.closeCallback = closeCallback || function() {};
    this.addCloseListener();
}