"use strict";

(function($, undefined) {

    XD.framework.application = XD.Class({
        ctor: function(options) {
            this._init();

            options = options || {};

            if(options.title) {
                $("title").text(options.title);
            };

        },

        _init: function(options) {
            this.layoutManager = new XD.layouts.LayoutManager();
        }
    });

})(jQuery);
