define(['jquery', 'handlebars'], function($, hand) {
    var render = function(tpl, target, data) {
        var tpl = $(tpl).html();
        var template = hand.compile(tpl);
        var html = template(data);
        $(target).html(html);
        data.forEach(function(val) {
            if (val.length === 2) {
                $('.box dl').css('width', '49%')
            } else if (val.length === 3) {
                $('.box dl').css('width', '33.3%')
            }
        })
    }
    return render
})