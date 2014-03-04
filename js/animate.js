/* global define */
define(['jquery'], function($) {
    'use strict';
    
    return {
        init: function() {
            this.$avatar = $('#avatar');
            this.$mainText = $('#mainText');
            this.$activity = $('#activity');

            // initial positions
            this.$avatar.css('margin-left', '-2600px');
        },

        entry: function() {
            this.$avatar.addClass('spin-cw');
            this.$avatar.animate({'margin-left': '25px'}, 2000, );
        }
    };
});