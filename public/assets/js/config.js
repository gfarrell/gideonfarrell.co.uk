var require;
var require_conf = {
    paths: {
        jquery:    '../../lib/jquery/dist/jquery',
        lodash:    '../../lib/lodash/dist/lodash',
        text:      '../../lib/requirejs-text/text',
        particles: '../../lib/particles.js/particles',
        jave:      '../../lib/Jave/jave',
        jave_api:  '../../lib/Jave/jave_api',
        moment:    '../../lib/moment/moment'
    },
    shim: {
        particles: {
            exports: 'particlesJS'
        }
    },
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
