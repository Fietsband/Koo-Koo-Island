BattleEventEngine.prototype = {
    add: function(event) {
        this.events.push(event);
        if (!(ENV === "test") && !this.inEventLoop) {
            this.invokeWithTimeout();
        }
    },

    clear: function() {
        this.infoHeader.reset();
        this.events = [];
    },

    invokeWithTimeout: function() {
        var event = this.events[0];
        if (event) {
            var self = this;
            this.inEventLoop = true;
            this.eventTimeout = setTimeout(function() {
                self.events.shift();
                self.callEvent(null, event);
                self.invokeWithTimeout();
            }, (event.timeOut || 0));
        } else {
            this.inEventLoop = false;
            clearTimeout(this.eventTimeout);
        }
    },

    invoke: function() {
        $.each(this.events, this.callEvent.bind(this));
        this.clear();
    },

    callEvent: function(i, event) {
        if (event.type) window.Events[event.type].invoke();
        if (event.perform) event.perform();
        if (event.message) this.infoHeader.update(event.message);
        clearTimeout(this.eventTimeout);
    }
};

function BattleEventEngine() {
    this.events = [];
    this.infoHeader = new BattleInfoHeader();
    this.eventTimeout = null;
    this.inEventLoop = false;
};