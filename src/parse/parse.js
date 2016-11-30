'use strict';

var parseTD1 = require('./td1');
var parseTD3 = require('./td3');

module.exports = function parse(text) {
    var logs = [];
    var lines = text.split(/[\r\n]+/);
    var result;
    switch (lines.length) {
        case 2:
            result = parseTD3(lines);
            break;
        case 3:
            result = parseTD1(lines);
            break;
        default:
            logs.push('We need 2 or 3 lines');
    }
    return result;
};