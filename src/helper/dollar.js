$ = {
    /* Test if your browser is compatible with Koo-Koo-Island.
     *
     * Returns: Boolean
     */
    isBrowserCompatible: function() {
        return window['localStorage'] !== null &&
            Array.prototype.map && Array.prototype.filter &&
            document.querySelector && document.querySelectorAll &&
            window.btoa && window.atob;
    },

    domReady: function(fn) {
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'interactive')
                    fn();
            });
        }
    },

    each: function(array, callback) {
        for (var i = 0; i < array.length; i++) {
            callback(i, array[i]);
        }
    },

    guid: function() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    },

    titleize: function(string) {
        return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    },

    methodize: function(string) {
        var result = string.split(/\-|\_/).map(function(i) {
            return $.titleize(i);
        });
        return result.join('').replace(/\#|\./, "");
    },

    constantize: function(string) {
        var result = string.replace(/\#|\./, "").split(/\-|\_/).map(function(i) {
            return $.titleize(i);
        });
        return result.join('');
    },

    setSelectBoxSelected: function(selectBox, optionValue) {
        $.each(selectBox.querySelectorAll("option"), function(i, option) {
            option.selected = false;
        });
        selectBox.querySelector("option[value=" + optionValue + "]").selected = true;
    },

    freeze: function(o) {
        var prop, propKey;
        Object.freeze(o);
        for (propKey in o) {
            prop = o[propKey];
            if (!o.hasOwnProperty(propKey) ||
                !(typeof prop === 'object') ||
                Object.isFrozen(prop)) {
                continue;
            }
            $.freeze(prop);
        }
    }
};