/* global module, require */
module.exports = function(Grunt) {
    'use strict';

    // Load all of our tasks from NPM
    require('load-grunt-config')(Grunt);

    // Default task
    Grunt.registerTask('default', [
        'copy:main',
        'less:dev',
        'autoprefixer:dev',
        'connect',
        'watch'
    ]);

    // Main build task
    Grunt.registerTask('build', [
        'clean',
        'less:dist',
        'requirejs',
        'copy:main',
        'copy:dist',
        'autoprefixer:dist',
        'htmlmin:dist',
        'imagemin'
    ]);

    // Deployment
    Grunt.registerTask('deploy', [
        'build',
        'sftp-deploy:dist'
    ]);
};
