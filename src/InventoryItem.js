var InventoryItem = (function() {
    var create = {};

    InventoryItem.prototype = {
        add: function() {
            this.item = create[this.itemScope].call(this);
            dom.find("#inventory-stash ." + appendItemScope.call(this))
                .appendChild(this.item);
        }
    }

    function getItemOptions() {
        var scope = $.titleize(this.itemScope);
        return window[scope][this.identifier];
    }

    function appendItemScope() {
        switch (this.itemScope) {
            case "weapons":
                return this.itemScope + " #select-weapons select";
                break;

            case "armors":
                return this.itemScope + " #select-armor select";
                break;

            case "items":
            case "magic":
                return this.itemScope;
                break;
        }
    }

    create = {
        items: function() {
            var pTag = document.createElement("a");
            pTag.id = this.identifier;
            pTag.innerHTML = this.itemOptions.title;
            pTag.title = this.itemOptions.description;
            pTag.onclick = this.itemOptions.use;
            return pTag;
        },

        weapons: function() {
            var pTag = document.createElement("option");
            pTag.innerHTML = this.itemOptions.title;
            pTag.title = this.itemOptions.description;
            pTag.value = this.identifier;
            return pTag;
        },

        armors: function() {
            var pTag = document.createElement("option");
            pTag.innerHTML = this.itemOptions.title;
            pTag.title = this.itemOptions.description;
            pTag.value = this.identifier;
            return pTag;
        },

        magic: function() {
            var pTag = document.createElement("a");
            pTag.id = this.identifier;
            pTag.innerHTML = this.itemOptions.title;
            pTag.title = this.itemOptions.description;
            return pTag;
        }
    }

    function InventoryItem(identifier, itemScope) {
        this.identifier = identifier;
        this.itemScope = itemScope;
        this.itemOptions = getItemOptions.call(this);
    }

    return InventoryItem;
})();