define(['jquery', 'lodash', 'jave', 'moment'], function($, _, Jave, moment) {
    var PodcastList = function(el, dataUrl) {
        this.$el = $(el);
        this.$el.empty();

        $.get(dataUrl, {}, function(data) {
            this.load(data);
        }.bind(this), 'xml');
    };

    _.extend(PodcastList.prototype, {
        load: function(data) {
            // run through <outline> entries and process each
            // we'll use jQuery to load it as DOM
            var $data    = $(data);
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

            // load via AJAX
            $.get('/podcast/fetch', {url: url}, function(response) {
                this.processPodcastData(response, callback);
            }.bind(this), 'xml');
        },

        processPodcastData: function(data, callback) {
            var $channel = $(data).find('channel').first();

            // Extract the following data:
            // - image url
            // - title
            // - description
            // - itunes category
            // - last updated date
            // - web url

            var podcast = {
                imageUrl:     $channel.children('itunes\\:image').first().attr('href'),
                title:        $channel.children('title').first().html(),
                description:  $channel.children('description').first().html(),
                category:     $channel.children('itunes\\:category').first().attr('text') || 'Uncategorised',
                updated:      $channel.children('pubDate').first().html(),
                website:      $channel.children('link').first().html()
            };

            if(podcast.updated) {
                podcast.updated = moment(podcast.updated).fromNow();
            }

            var html = this.makeRow(podcast);

            $(html).appendTo(this.$el);
            callback.call(this);
        },

        makeRow: function(data) {
            var template  = '<div class="row podcast">';
                    template += '<div class="podcast__inner">';
                        template += '<div class="col-xs-2">';
                            template += '<img class="podcast__image" src="<%= imageUrl %>" alt="cover image">';
                        template += '</div>';
                        template += '<div class="col-xs-10">';
                            template += '<div class="row">';
                                template += '<h2 class="podcast__title"><%= title %></h2>';
                                template += '<p class="podcast__description"><%= description %></p>';
                            template += '</div>';
                            template += '<div class="row">';
                                template += '<p class="podcast__meta">';
                                if(data.category) {
                                    template += 'In <span class="podcast__meta__category"><%= category %></span>. ';
                                }
                                if(data.updated) {
                                    template += 'Last updated <span class="podcast__meta__updated"><%= updated %></span>.';
                                }
                                template += '</p>';
                            template += '</div>';
                        template += '</div>';
                    template += '</div>';
                template += '</div>';
            return _.template(template, data);
        }

    });

    Jave.define('podcasts', function($el, api) {
        new PodcastList($el, api.get('url'));
    });

    return PodcastList;
});
