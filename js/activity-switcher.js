/* global define, setInterval, clearInterval */
define(['lodash', 'jquery'], function(_, $) {
    'use strict';

    var ActivitySwitcher = function($el, activities, opts) {
        opts = opts || {};
        _.defaults(opts, {
            random: true,
            interval: 10 // interval in seconds
        });
        this.options = opts;

        this.activities = activities;

        this.$el = $($el);

        this.$el.text(_.sample(this.activities));
    };

    _.extend(ActivitySwitcher.prototype, {
        switch: function(i) {
            var l,a;
            if(this.options.random) {
                a = _.sample(this.activities);
            } else {
                i = i || ++this.index;
                l = this.activities.length;
                a = this.activities[i % l];
                this.index = i;
            }

            this.changeText(a);
        },
        start: function() {
            if(this.timer) this.stop();
            this.timer = setInterval(this.switch.bind(this), this.options.interval * 1000);
        },
        stop: function() {
            clearInterval(this.timer);
        },
        changeText: function(text) {
            var oldText = this.$el.text(),
                fadeIn  = $('<span>'),
                fadeOut = $('<span>');

            if(text == oldText) return;

            fadeOut.text(oldText);
            fadeOut.insertAfter(this.$el);
            fadeOut.css({
                position: 'relative',
                left:     - this.$el.width()
            });
            fadeOut.css('transition', 'top 1s ease, opacity 1s ease');

            this.$el.css('opacity', 0);

            fadeIn.text(text);
            fadeIn.insertAfter(fadeOut);
            fadeIn.css({
                position: 'relative',
                left:     - this.$el.width() - fadeOut.width(),
                opacity:  0,
                top:      -15
            });
            _.delay(function() {
                fadeIn.css('transition', 'top 1s ease, opacity 1s ease');
            }, 100);

            // animate
            fadeOut.css({top: 15, opacity: 0});
            _.delay(function() {
                fadeIn.css({top: 0, opacity: 1});
            }, 1000);
            _.delay(function() {
                this.text(text);
                this.css('opacity', 1);
                fadeIn.remove();
                fadeOut.remove();
            }.bind(this.$el), 2000);
        }
    });

    return ActivitySwitcher;
});