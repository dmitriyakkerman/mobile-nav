let gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    autoPrefixer = require('gulp-autoprefixer');

gulp.task('compile-scss', function () {
    return gulp.src('src/scss/mobile-nav.scss')
        .pipe(sass().on('error', function (error) {
            console.log('ERROR: ' + error);
        }))
        .pipe(autoPrefixer())
        .pipe(rename('mobile-nav.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch-scss', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('compile-scss'));
});