/* global module */
module.exports = {
    // Watch task for watching files to build out
    // https://github.com/gruntjs/grunt-contrib-watch
    options: {
        livereload: true
    },
    styles: {
        files: ['assets/less/*.less', 'assets/less/**/*.less'],
        tasks: ['less:dev', 'autoprefixer:dev']
    },
    images: {
        files: ['assets/img/**'],
        tasks: ['copy']
    },
    scripts: {
        files: ['assets/js/**']
    },
    views: {
        files: ['../app/views/*.php', '../app/views/**/*.php']
    }
};
