"use strict";

(function($, undefined) {

    XD.framework.NavigationManager = XD.Class({
        ctor: function() {
            this._pages = {};
            this._first = true;
            this._waitPopState = undefined;

            $(window).on("popstate", $.proxy(this._onPopState, this));
        },

        _getUri: function() {
            return window.location.hash.replace("#", "");
        },

        _getState: function() {
            return window.history.state;
        },

        _onPopState: function() {
            if(this._waitPopState && this._waitPopState.state() === "pending") {
                this._waitPopState.resolve();
                this._waitPopState = undefined;
                return;
            }

            var uri = this._getUri();
            var currentState = this._getState();

            if(this._first) {
                this._first = false;
                window.history.replaceState({ xdType: "level1" }, null, null);
                XD.app.init();
                return;
            }

            var historyLength = XD.app.history.getLength();

            if(!currentState) {
                // Доделать позже
                if(historyLength === 1) {
                    window.history.replaceState({ xdType: "level2" }, null, "#" + uri);
                    XD.app.navigationManager.navigate(uri, "blank");
                } else {
                    alert(3);
                    this._waitPopState = $.Deferred();
                    this._waitPopState.done(function() {
                        // DFD
                        //window.history.pushState({ xdType: "level2" }, null, "#" + uri);
                        XD.app.navigationManager.navigate(uri, "blank");
                    });

                    window.history.go(-2);
                }
            } else {
                if(currentState.xdType === "level1") {
                    if(historyLength > 1) {
                        window.history.pushState({ xdType: "level2" }, null, null);
                        XD.app.navigationManager.navigate(undefined, "back");
                    } else {
                        XD.app.navigationManager.navigate(uri, "back");
                    }
                }
            }
        },

        addPage: function(obj) {
            this._pages[obj.uri] = { uri: obj.uri, layout: obj.layout };
        },

        navigate: function(uri, target) {
            var historyLength = XD.app.history.getLength();
            var currentState = this._getState();

            if(target === "back") {
                var backUri = XD.app.history.backState();

                if(currentState.xdType === "level1") {
                    alert("Выход из приложения");
                    window.history.back();
                } else {
                    window.history.replaceState({ xdType: "level2" }, null, "#" + backUri);
                }
            } else if(target === "current") {
                XD.app.history.replaceState(uri);

                if(currentState.xdType === "level1") {
                    window.history.replaceState({ xdType: "level1" }, null, "#" + uri);
                } else {
                    window.history.replaceState({ xdType: "level2" }, null, "#" + uri);
                }
            } else {
                XD.app.history.pushState(uri);

                debugger

                if(!currentState) {
                    window.history.replaceState({ xdType: "level2" }, null, "#" + uri);
                } else if(currentState.xdType === "level1") {
                    window.history.pushState({ xdType: "level2" }, null, "#" + uri);
                } else {
                    window.history.replaceState({ xdType: "level2" }, null, "#" + uri);
                }
            }

            var page = this._pages[uri];
            if(page) {
                XD.app.renderEngine.show(page);
            } else {
                XD.app.renderEngine.show();
            }
        }
    });

})(jQuery);
