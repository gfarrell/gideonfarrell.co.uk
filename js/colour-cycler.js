/* global define, setInterval, clearInterval */
define(['jquery', 'lodash'], function($, _) {
    'use strict';

    var ColourCycler = function(el, opts) {
        this.$el = $(el);
        opts = opts || {};
        _.defaults(opts, {
            // default options
            colours: ['#333333', '#332626', '#262430', '#243024', '#333026'],
            property: 'background-color',
            interval: 10 // interval in seconds
        });
        this.options = opts;

        this.$el.addClass('colour-transition');
        this.$el.css('background-color', this.options.colours[0]);
        this.index = 0;
    };

    _.extend(ColourCycler.prototype, {
        cycle: function(i) {
            i = i || ++this.index;

            var l = this.options.colours.length,
                c = this.options.colours[i % l];

            this.$el.css('background-color', c);

            this.index = i;
        },
        start: function() {
            this.timer = setInterval(this.cycle.bind(this), this.options.interval*1000);
        },
        stop: function() {
            if(this.timer) {
                clearInterval(this.timer);
            }
            this.timer = false;
        }
    });

    return ColourCycler;
});