/* global module */
var rcfg = require('../js/config');
module.exports = {
    // Require.js task for compiling javascript
    // https://github.com/gruntjs/grunt-contrib-requirejs
    // More info: https://github.com/jrburke/r.js/blob/master/build/example.build.js
    // This is for production only
    compile: {
        options: {
            baseUrl: 'js',
            paths: rcfg.paths,
            map: rcfg.map,
            shim: rcfg.shim,
            optimize: 'uglify',
            keepBuildDir: true,
            name: 'main',
            out: 'dist/main.js',
            include: '../lib/requirejs/require.js'
        }
    }
};
