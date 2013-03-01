"use strict";

(function($, undefined) {

	XD.framework.RenderEngine = XD.Class({
		ctor: function() {
			
		},

		show: function(page) {
		    if(page) {
		        var cont = XD.app.layoutManager.getContent(page.layout);

		        var content = $("<div>").attr("id", "viewport")
                                    .append($("<p>").text(page.layout))
                                    .append($("<br>"))
                                    .append($("<button>").text("Change location to 'Index'").on("click", this._navigate).data("_link", "index"))
                                    .append($("<br>"))
                                    .append($("<button>").text("Change location 'Page 1'").on("click", this._navigate).data("_link", "page1"));
				
		        if(cont) content.append(cont);

                $("#viewport").replaceWith(content);
			} else {
				$("#viewport").replaceWith($("<div>").attr("id", "viewport")
					.append($("<p>").text("Bad URI"))
				);
			}
		},

		_navigate: function() {
			var uri = $(this).data("_link");

			XD.app.navigationManager.navigate(uri, "blank");
		}
	});

})(jQuery);
