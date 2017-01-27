GameStorage = {
    store: function(key, data) {
        return localStorage.setItem(key, data);
    },

    get: function(key) {
        return localStorage.getItem(key);
    },

    keyExists: function(key) {
        return localStorage.getItem(key) !== null;
    }
}