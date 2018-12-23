var gulp = require('gulp');
var browserSync = require('browser-sync').create();
global.browserSync = browserSync

gulp.task('server', function () {

    browserSync.init({
        server: "./dev"
    });

});
