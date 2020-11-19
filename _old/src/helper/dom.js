dom = {
    find: function(identifier, many) {
        if (many) return document.querySelectorAll(identifier);
        else return document.querySelector(identifier);
    },

    findId: function(identifier) {
        return document.getElementById(identifier);
    },

    findClass: function(identifier) {
        return document.getElementsByClassName(identifier);
    }
};