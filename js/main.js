/* global require */

require.config({
    paths: {
        jquery: '../lib/jquery/dist/jquery',
        bootstrap: '../lib/bootstrap/js',
        lodash: '../lib/lodash/dist/lodash'
    }
});

require(['jquery', 'lodash', 'animate', 'colour-cycler', 'activity-switcher'],
    function($, _, Animate, ColourCycler, ActivitySwitcher) {
        'use strict';
        
        var c = new ColourCycler($('body'));
        c.start();

        var a = new ActivitySwitcher($('#activity-box'), [
            'am finding homes for lost electrons',
            'am staring at the sun',
            'am measuring solar jets',
            'am an entrepreneur',
            'am a natural scientist',
            'am a developer',
            'am an astrophysicist',
            'am a photographer',
            'am drinking tea'
        ], {interval: 20});

        a.start();
    }
);