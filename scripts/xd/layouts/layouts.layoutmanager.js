"use strict";

(function($, undefined) {

	XD.layouts.LayoutManager = XD.Class({
		ctor: function() {
			var self = this;

			this._layouts = {};
			$("script[type='html/xd-layout']").each(function(i, el) {
				var res = /\/([^\/]*)\.ly\.html$/.exec(el.src);
				console.log(el.src);
				if(res) {
					var layoutName = res[1];
					window.ttt = el;
					self._layouts[layoutName] = $(el).html();
				}
			});
		}
	});

})(jQuery);
