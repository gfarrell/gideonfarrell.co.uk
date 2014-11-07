var require;
var require_conf = {
    paths: {
        jquery:       '../lib/jquery/dist/jquery',
        lodash:       '../lib/lodash/dist/lodash'
    },
    shim: {},
    map: {}
};

if(typeof require == 'undefined') {
    require = require_conf;
} else if(typeof require.config == 'function') {
    require.config(require_conf);
}

if(typeof module != 'undefined') {
    module.exports = require_conf;
}
