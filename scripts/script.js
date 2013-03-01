"use strict";

var app;

$(function() {

    debugger

    app = new XD.framework.application({
        title: "Sample Application",
        pages: [
            { uri: "index", layout: "mainpage" },
            { uri: "page1", layout: "page1" }
        ],
        rootPageUri: "index"
    });

    //app.init();

});
