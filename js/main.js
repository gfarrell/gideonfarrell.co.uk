/* global require, window */

require.config({
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        bootstrap: '../lib/bootstrap/js',
        lodash: '../lib/lodash/dist/lodash'
    }
});

require(['jquery', 'lodash', 'activity-switcher'],
    function($, _, ActivitySwitcher) {
        'use strict';

        var a = new ActivitySwitcher($('#activity-box'), [
            'am finding homes for lost electrons',
            'am staring at the sun',
            'am measuring solar jets',
            'am an entrepreneur',
            'am a developer',
            'am an astrophysicist',
            'am a photographer',
            'am drinking tea'
        ], {interval: 10});

        a.start();

        var hashChange = function() {
            var h = window.location.hash;
            if(h == '#giginours') {
                $('.avatar').addClass('pulsate');
            } else {
                $('.avatar').removeClass('pulsate');
            }
        };

        window.addEventListener('hashchange', hashChange);

        hashChange();

        var emlComps = ['mailto', ':', 'me', '@', 'gideon', 'farrell', '.', 'co', '.', 'uk'];

        $('#email').children('a').attr('href', emlComps.join(''));
    }
);