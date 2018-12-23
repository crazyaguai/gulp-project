import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import md5 from 'gulp-md5-plus';
import gulpif from 'gulp-if';

var replace = require('gulp-replace');

var devServer = false

function scss() {
    return gulp
        .src('./src/entry/scss/*.scss')
        .pipe(gulpif(devServer,sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(replace('../../', '../'))
        .pipe(gulpif(devServer,sourcemaps.write()))
        .pipe(gulp.dest('./dev/css'));
}

gulp.task('scss',scss)

gulp.task('scss:dev', function () {
    devServer = true
    gulp.watch('./src/entry/scss/*.scss', function (event) {
        return scss(event.path).pipe(global.browserSync.reload({stream: true}));
    });
    return scss()
});

gulp.task('scss:dev2dist',function () {
    return gulp.src('./dev/css/*.css')
        .pipe(webpcss())
        .pipe(cleanCSS())
        .pipe(md5(6, './dist/*.html'))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('scss:prod', gulp.series('scss','scss:dev2dist'));
