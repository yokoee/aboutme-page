const gulp = require('gulp')
const less = require('gulp-less')
const connect = require('gulp-connect')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('less', () => {
    gulp.src('src/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['defaults'],
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('connect', () => {
    connect.server({
        livereload: true,
        port: 8080,
    });
})

gulp.task('watch', ['connect'], () => {
    gulp.watch('src/*.less', ['less'])
})

gulp.task('default', ['watch'])