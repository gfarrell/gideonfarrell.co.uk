/* global module, require */
module.exports = function(Grunt) {
    'use strict';

    // Load all of our tasks from NPM
    require('load-grunt-config')(Grunt);

    // Default task
    Grunt.registerTask('default', [
        'less:dev',
        'autoprefixer:dev',
        'watch'
    ]);

    // Main build task
    Grunt.registerTask('build', [
        'clean',
        'less:dist',
        'requirejs',
        'autoprefixer:dist',
        'imagemin'
    ]);
};
