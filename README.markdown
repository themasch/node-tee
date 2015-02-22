# this thing is old and ugly and nasty and useless. go look somewhere else! 


# tee

tee is a simple stream multiplexer for nodes writable streams. 

## install

To install tee just checkout this repository and copy the tee.js wherever you need it. 
If this projects gets something that looks "ready" someday, i'll publish it at npm. 

## Usage

    var tee = require('tee');
    var target = new tee(process.stdout, fs.createWriteStream('log.txt'));
    target.write('logentry');


