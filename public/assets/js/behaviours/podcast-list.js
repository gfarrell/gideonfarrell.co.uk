define(['jquery', 'lodash', 'Jave'], function($, _, Jave) {
    var PodcastList = function(el, dataUrl) {
        this.$el = $(el);

        $.get(dataUrl, {}, function(data) {
            this.load(data);
        }, 'xml');
    };

    _.extend(PodcastList.prototype, {
        load: function($data) {
            // run through <outline> entries and process each
            // we'll use jQuery to load it as DOM
            var outlines = $data.find('outline');

            if(outlines.length > 0) {
                var i = 0;

                var process = function() {
                    if(i < outlines.length - 1) {
                        this.loadDataForOutline(outlines[i], process);
                        i++;
                    }
                }.bind(this);

                process();
            }
        },

        loadDataForOutline: function(outline, callback) {
            var url = outline.getAttribute('xmlUrl');

            // have to load via iframe
            var $iframe = $('<iframe style="display: none">');
            $iframe.appendTo('body');
            $iframe.on('load', function() {
                this.processPodcastData($iframe[0], callback);

                $iframe.remove();
            }.bind(this));

            $iframe.attr('src', url);
        },

        processPodcastData: function(data, callback) {
            var $channel = $(data);

            // Extract the following data:
            // - image url
            // - title
            // - description
            // - itunes category
            // - last updated date
            // - web url

            var imageUrl    = $channel.children('image').first().find('url').html();
            var title       = $channel.children('title').first().html();
            var description = $channel.children('description').first().html();
            var category    = $channel.children('category').first().html();
            var updated     = $channel.children('pubDate').first().html();
            var website     = $channel.children('link').first().html();

            console.log(title);

            // callback.call(this);
        }

    });

    Jave.define('podcasts', function($el, api) {
        new PodcastList($el, api.get('url'));
    });

    return PodcastList;
});