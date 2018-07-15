var url = require('url'),
    fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    server = require('gulp-webserver'),
    data = require('./mock/data.json'),
    sass = require('gulp-sass'),
    css = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    es6 = require('gulp-babel');
gulp.task('server', ['scss'], function() {
    gulp.src('src')
        .pipe(server({
            port: 8888,
            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return
                }
                if (pathname === '/api/list') {
                    res.end(JSON.stringify({ code: 1, data: data }))
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }

            }
        }))
});
// 压缩css
gulp.task('scss', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(css())
        .pipe(gulp.dest('build/css'))
})

gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['scss'])
})
gulp.task('default', ['server', 'watch'])


gulp.task('js', function() {
    gulp.src('src/js/app/*.js')
        .pipe(es6({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'))
})