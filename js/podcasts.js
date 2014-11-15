require(['jquery', 'lodash', 'text!../assets/podcasts.opml!strip'], function($, _, data) {
    $pp = $(data);
    $pp.each(function(i, outline) {
        if(outline.tagName == 'outline') {
            console.log($(outline).attr('text'));
        }
    });
});
