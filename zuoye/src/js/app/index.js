require(['jquery', 'render'], function($, render) {
    $.ajax({
            url: '/api/list',
            dataType: 'json',
            success: function(res) {
                render('#entry', '.box', abc(res.data.list, 3))
            }
        })
        // 改造数据
    function abc(data, num) {
        var str = [];
        var len = Math.ceil(data.length / num);
        for (var i = 0; i < len; i++) {
            var arr = data.splice(0, num)
            str.push(arr)
        }
        return str
    }
})