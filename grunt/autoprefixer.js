/* global module */
module.exports = {
    // Autoprefixer task for prefixing CSS
    // http://css-tricks.com/autoprefixer/
    // https://github.com/ai/autoprefixer
    // https://github.com/nDmitry/grunt-autoprefixer
    dev: {
        files: {
            'dist/styles.dev.css': 'dist/styles.dev.css'
        }
    },
    dist: {
        files: {
            'dist/styles.css': 'dist/styles.css'
        }
    }
};
