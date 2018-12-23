import gulp from 'gulp';
import replace from 'gulp-replace';
import minifyHtml from 'gulp-minify-html';

gulp.task('html:dev',function () {
    return gulp
        .src('src/entry/html/*.html')
        .pipe(gulp.dest('dev'))
})

gulp.task('html:dev2dist',function () {
    return gulp
        .src('dev/*.html')
        .pipe(gulp.dest('dist'))
})

gulp.task('html:prod',gulp.series('html:dev','html:dev2dist'))
