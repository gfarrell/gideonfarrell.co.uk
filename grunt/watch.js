/* global module */
module.exports = {
    // Watch task for watching files to build out
    // https://github.com/gruntjs/grunt-contrib-watch
    options: {
        livereload: true
    },
    styles: {
        files: ['less/*.less', 'less/**/*.less'],
        tasks: ['less:dev', 'autoprefixer:dev']
    },
    pages: {
        files: ['*.html']
    },
    images: {
        files: ['img/**'],
        tasks: ['copy']
    },
    scripts: {
        files: ['js/**']
    }
};
