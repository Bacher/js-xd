"use strict";

(function($, undefined) {

    XD.framework.History = XD.Class({
        ctor: function() {
            this._history = [];
        },

        pushState: function(uri) {
            this._history.push(uri);
        },

        replaceState: function(uri) {
            this._history[this._history.length > 0 ? this._history.length - 1 : 0] = uri;
        },

        backState: function() {
            if(this._history.length < 1) {
                debugger;
            }

            this._history.pop();
            return this._history.length > 0 ? this._history[this._history.length - 1] : undefined;
        },

        getLength: function() {
            return this._history.length;
        }
    });

})(jQuery);
