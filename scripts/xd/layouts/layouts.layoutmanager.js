"use strict";

(function($, undefined) {

	XD.layouts.LayoutManager = XD.Class({
	    ctor: function() {
	        debugger;
			this._layouts = {};
			//$("script[type='html/xd-layout']").each(function(i, el) {
			//	var res = /\/([^\/]*)\.ly\.html$/.exec(el.src);
			//	if(res) {
			//		var layoutName = res[1];
					
			//		self._layouts[layoutName] = "<p>" + res[1] + "</p";
			//	}
		    //});

			this._layouts["mainpage"] = "<h1>HELLO WORLD</h1>";
			this._layouts["page1"] = "<h1>HELLO PAGE1</h1>";
		},

		getContent: function(layoutName) {
		    if(this._layouts[layoutName]) {
		        return this._layouts[layoutName];
		    }
		}
	});

})(jQuery);
