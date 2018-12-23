import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import md5 from 'gulp-md5-plus';

function img(){
    return gulp
        .src('./src/img/*.{png,gif,jpg,jpeg}')
        .pipe(gulp.dest('./dev/img'))
}

gulp.task('img',img)

gulp.task('img:dev',function () {

    gulp.watch('./src/img/*.{png,gif,jpg,jpeg}', function (event) {
        return img(event.path)
            .pipe(global.browserSync.reload({stream: true}))
    });

    return img();
})

gulp.task('img:dev2dist',function () {
    return gulp
        .src('./dev/img/*.{png,gif,jpg,jpeg}')
        .pipe(imagemin())
        .pipe(md5(6, ['./dist/*.html', './dist/css/*.css', './dist/js/*.js']))
        .pipe(gulp.dest('./dist/img'))
})

gulp.task('img:prod',gulp.series('img','img:dev2dist'))
