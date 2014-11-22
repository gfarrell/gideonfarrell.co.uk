/* global module */
module.exports = {
    // LESS task for processing our stylesheets
    // https://github.com/gruntjs/grunt-contrib-less
    // Two targets: dev, production
    options: {
        paths: ['less', 'lib']
    },
    dev: {
        options: {
            sourceMap: true,
            compress: false,
            cleancss: false
        },
        files: {
            'assets/dist/styles.dev.css': 'assets/less/styles.less'
        }
    },
    dist: {
        options: {
            sourceMap: false,
            compress: true,
            cleancss: true
        },
        files: {
            'assets/dist/styles.css': 'assets/less/styles.less'
        }
    }
};
