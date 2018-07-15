require.config({
    baseUrl: '/js/',
    paths: {
        "jquery": 'libs/jquery-3.2.1.min',
        "handlebars": "libs/handlebars-v4.0.11",
        "index": "app/index",
        "render": "common/render"
    }
})
require(['index'])