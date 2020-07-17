var assert = require('assert');
var fs = require('fs');
var path = require('path');
var serializer = require('../lib/serializer');

var data = require('./data.js');
var typeData = {};

serializer.types().forEach(function(elem) {
    var filePath = path.join(__dirname, 'data.' + elem);
    if (fs.existsSync(filePath)) {
        typeData[elem] = fs.readFileSync(filePath, 'utf8').trim();
    }
});

describe('parse', function() {
    for (var name in typeData) {
        it(name, function() {
            assert.deepEqual(data, serializer.parse(name, typeData[name]));
        });
    }
});

describe('stringify', function() {
    for (var name in typeData) {
        it(name, function() {
            assert.deepEqual(typeData[name], serializer.stringify(name, data, null, 4).trim());
        });
    }
});
