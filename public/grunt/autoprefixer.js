/* global module */
module.exports = {
    // Autoprefixer task for prefixing CSS
    // http://css-tricks.com/autoprefixer/
    // https://github.com/ai/autoprefixer
    // https://github.com/nDmitry/grunt-autoprefixer
    dev: {
        files: {
            'assets/dist/styles.dev.css': 'assets/dist/styles.dev.css'
        }
    },
    dist: {
        files: {
            'assets/dist/styles.css': 'assets/dist/styles.css'
        }
    }
};
