define(['jave'], function(Jave) {
    Jave.define('mailto', function($el, api) {
        var addr = api.get('address');
        var parts = [addr, 'gideonfarrell', 'co.uk'];

        $el.attr('href', 'mailto://' + parts[0] + '@' + parts[1] + '.' + parts[2]);
    });
});
