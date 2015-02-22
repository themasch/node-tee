"use strict";
var Writable = require("stream").Writable;
var EventEmitter = require("events").EventEmitter;
var tee = function(/** streams **/) {
    this.streams = Array.apply(null, arguments);
};

tee.prototype.addStream = function(s) {
    this.streams.push(s);
}

function forward(method) {
    tee.prototype[method] = function() {
        var args = arguments;
        this.streams.forEach(function(s) {
            s[method].apply(s, args);
        });
    };
}

for (var prop in Writable.prototype){
	forward(prop);
}
for (var prop in EventEmitter.prototype){
	forward(prop);
}

module.exports = tee;


