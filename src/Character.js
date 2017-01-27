Character.prototype = {
    add: function() {
        this.character.style.display = "inline";
        this.toBeRemovedSpan.style.display = "none";
        this.applyOtherMethods();
        this.addOnClickMethod();
        this.addOnInitializeMethod();
    },

    addOnClickMethod: function() {
        if (this.methods && this.methods["click"]) {
            this.character.onclick = this.methods["click"].bind(this);
        }
    },

    addOnInitializeMethod: function() {
        if (this.methods && this.methods["initialize"]) {
            this.methods["initialize"].bind(this)();
        }
    },

    applyOtherMethods: function() {
        for (method in this.methods) {
            if (!/click|initialize/.test(method)) {
                this[method] = this.methods[method];
            }
        }
    }
};

function Character(identifier, methods) {
    this.character = dom.findId(identifier);
    this.characterType = this.character.className;
    this.toBeRemovedSpan = dom.findId(identifier + "-remove");
    this.methods = methods;
}