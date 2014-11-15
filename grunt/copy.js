/* global module, require */
module.exports = {
    // Copy task for copying some files
    // https://github.com/gruntjs/grunt-contrib-copy
    main: {
        files: [
            {expand: true, flatten: false, src: ['assets/**'], dest: 'dist/', filter: 'isFile'},
            {src: ['favicon.ico'], dest: 'dist/'},
            {src: ['ajax.php'], dest: 'dist/'}
        ]
    },
    dist: {
        files: [
            {flatten: true, src: ['*.html'], dest: 'dist/'}
        ],
        options: {
            process: function(content) {
                var c = content;

                // replace styles.dev.css -> styles.css
                c = c.replace('styles.dev.css', 'styles.css');

                // replace the scripts
                c = c.replace(/<!--{SCRIPTS}-->\n\s*<script.+src="js\/config.js"><\/script>\n\s*<script(\n|.)+data-main="\/js\/([A-Za-z0-9_\-]+.js)"((\n|.)+)<!--{END}-->/gm, "<script language=\"javascript\" type=\"text/javascript\" src=\"$2\"></script>");

                // replace dist/ with nothing
                c = c.replace(/dist\//g, '');

                // add analytics code
                c = c.replace(
                    '<!--{GA}-->',
                    require('grunt').file.read('grunt/template.analytics.html')
                );

                return c;
            }
        }
    }
};
