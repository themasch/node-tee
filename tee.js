var tee = function(/** streams **/) {
    this.streams = [];
    for(var x in arguments) {
        this.addStream(arguments[x]);
    }
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

[   "write", 
    "end", 
    "destroy", 
    "destroySoon", 
    "addListener", 
    "on", 
    "once", 
    "removeListener", 
    "removeAllListeners", 
    "setMaxListeners", 
    "listeners", 
    "emit" ].forEach(forward);

module.exports = tee; 


