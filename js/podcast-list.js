define(['jquery', 'lodash'], function($, _) {
    var PodcastList = function(el, data) {
        this.$el = $(el);
        this.data = data;

        this.load();
    };

    _.extend(PodcastList.prototype, {
        load: function() {
            // run through <outline> entries and process each
            // we'll use jQuery to load it as DOM
            var $data = $(this.data);
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

    return PodcastList;
});
