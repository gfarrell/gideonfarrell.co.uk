/* global require, window */

require.config({
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        bootstrap: '../lib/bootstrap/js',
        lodash: '../lib/lodash/dist/lodash',
        shine: '../lib/shine/dist/shine.min'
    },
    shim: {
        shine: {
            exports: 'shinejs'
        }
    }
});

require(['jquery', 'lodash', 'activity-switcher', 'shadows'],
    function($, _, ActivitySwitcher, Shadows) {
        'use strict';

        var a;
        var emlComps;
        var hashChange;

        // Configure and run the activity switcher
        a = new ActivitySwitcher($('#activity-box'), [
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

        // Email obfuscation
        emlComps = ['mailto', ':', 'me', '@', 'gideon', 'farrell', '.', 'co', '.', 'uk'];
        $('#email').children('a').attr('href', emlComps.join(''));

        // Shadow FX
        Shadows.make($('h1'));

        // Easter egg of sorts, thanks Raph
        hashChange = function() {
            var h = window.location.hash;
            if(h == '#giginours') {
                $('.avatar').addClass('pulsate');
            } else {
                $('.avatar').removeClass('pulsate');
            }
        };
        window.addEventListener('hashchange', hashChange);
        hashChange();
    }
);