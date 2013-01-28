"use strict";

(function($, undefined) {

    XD.framework.application = XD.Class({
        ctor: function(options) {
            XD.app = this;

            this._options = options || {};

            this._init();

            if(this._options.title) {
                $("title").text(this._options.title);
            };
        },

        _init: function() {
            this.layoutManager = new XD.layouts.LayoutManager();
            this.renderEngine = new XD.framework.RenderEngine();
            this.navigationManager = new XD.framework.NavigationManager();
            this.history = new XD.framework.History();
            
            if(this._options.pages) {
                for(var i = 0; i < this._options.pages.length; i++) {
                    var el = this._options.pages[i];
                    this.navigationManager.addPage({ uri: el.uri, layout: el.layout });
                }
            }
        },

        init: function init() {
            this.navigationManager.navigate(this._options.rootPageUri, "current");
        }
    });

})(jQuery);
