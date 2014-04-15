/* global define,window */
define(['lodash', 'shine'], function(_, Shine) {
    'use strict';

    var exports = {};
    var light;
    var config;
    var shines;

    shines = [];

    config = new Shine.Config({
        opacity: 0.6
    });
    light = new Shine.Light({
        position: new Shine.Point(window.innerWidth*0.5, window.innerHeight*0.5)
    });

    window.addEventListener('mousemove', function(e) {
        light.position = new Shine.Point(e.clientX, e.clientY);

        _.each(shines, function(s) {
            s.draw();
        });
    });

    exports.make = function(els) {
        _.each(els, function(e) {
            var s    = new Shine.Shine(e);
            s.config = config;
            s.light  = light;

            shines.push(s);
        });
    };

    return exports;
});