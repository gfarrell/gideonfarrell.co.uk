/* global module */
module.exports = {
    imagemin: {
        options: {
            progressive: true,
            optimizationLevel: 3,
            interlace: true
        },
        files: [{
            expand: true,
            src: ['assets/img/*.{png,jpg,gif}', 'assets/img/**/*.{png,jpg,gif}']
        }]
    }
};
