module.exports = exports = {};

var types = {
    json: JSON,
    cson: require('cson-parser'),
    json5: require('json5'),
    yaml: {
        parse: function(text) {
            return require('js-yaml').load(text);
        },
        stringify: function(obj, replacer, space) {
            return require('js-yaml').dump(obj, { indent: space });
        }
    }
};

types.yml = types.yaml;

exports.parse = function(type, text) {
    var ltype = type.trim().toLowerCase();
    if (types[ltype])
        return types[ltype].parse(text);

    throw new Error('Unsupported type : ' + ltype);
};

exports.stringify = function(type, obj, replacer, space) {
    var ltype = type.trim().toLowerCase();
    if (types[ltype])
        return types[ltype].stringify(obj, replacer, space);

    throw new Error('Unsupported type : ' + ltype);
};

exports.types = function() {
    return Object.keys(types);
};
