"use strict";

var XD;

(function($, undefined) {

    XD = {};
    XD.framework = {};
    XD.layouts = {};

    XD.Class = function(fields) {
        var newClass = fields.ctor;
 
        $.each(fields, function(fieldName) {
            if(fieldName !== "ctor") {
                newClass.prototype[fieldName] = fields[fieldName];
            }
        });

        return newClass;
    };

})(jQuery);
