"use strict";

(function($, undefined) {

	XD.layouts.LayoutManager = XD.Class({
		ctor: function() {
			var self = this;

			this._layouts = {};
			$("script[type='html/xd-layout']").each(function(i, el) {
				var res = /\/([^\/]*)\.ly\.html$/.exec(el.src);
				if(res) {
					var layoutName = res[1];
					
					self._layouts[layoutName] = "<p>" + res[1] + "</p";
				}
			});
		}
	});

})(jQuery);
