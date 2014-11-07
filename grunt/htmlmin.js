/* global module */
module.exports = {
    // HtmlMin task for minifying our HTML
    // https://github.com/gruntjs/grunt-contrib-htmlmin
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
            caseSensitive: true,
            maxLineLength: 120
        },
        files: {
            'dist/index.html': 'dist/index.html'
        }
    }
};