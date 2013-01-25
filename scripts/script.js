"use strict";

var app;

$(function() {

    app = new XD.framework.application({
        title: "Sample Application",
        pages: [
            { uri: "index", layout: "mainpage.ly" },
            { uri: "page1", layout: "page1.ly" }
        ],
        rootPageUri: "index"
    });

});
