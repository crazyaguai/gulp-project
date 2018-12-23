import gulp from 'gulp';
import babel from "gulp-babel";
import uglify from 'gulp-uglify'
import md5 from 'gulp-md5-plus';
import concat from 'gulp-concat'
import babelify from 'babelify';
import watchify from 'watchify';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';

var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var replace = require('gulp-replace');

var devServer = false

var b = null

function makeBundle(){
    if(!b){
        b = browserify({
            entries: 'src/entry/js/index.js',
            debug: devServer
        })
            .transform(babelify)
            .on('error', function (err) { console.error(err); })
    }
}

function bundle(){
    makeBundle()
    return b
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(replace('../../', '../'))
        .pipe(gulp.dest('dev/js'))
        .pipe(gulpif(devServer,global.browserSync.reload({stream: true})))
}

gulp.task('js',bundle)

gulp.task('js:dev',function () {

    devServer = true

    makeBundle()

    b.plugin(watchify);

    b.on('update',bundle)

    return bundle()
})

gulp.task('js:dev2dist',function () {
    return gulp.src('dev/js/*.js')
        .pipe(uglify())
        .pipe(md5(6, './dist/*.html'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('js:prod',gulp.series('js','js:dev2dist'))
