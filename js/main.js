/* global require */

require.config({
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        bootstrap: '../lib/bootstrap/js',
        lodash: '../lib/lodash/dist/lodash'
    }
});

require(['jquery', 'animate', 'colour-cycler'], function($, Animate, ColourCycler) {
    'use strict';
    
    var c = new ColourCycler($('body'));
    c.start();
});