const gulp = require('gulp')
const babel = require('gulp-babel')
const minify = require('gulp-minify')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')

gulp.task('css', () => {
    gulp.src('src/*.css')
        .pipe(autoprefixer({
            browsers: ['defaults'],
        }))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('js', () => {
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(minify({
            noSource: true,
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('copyLib', () => {
    gulp.src('src/lib')
        .dest('dist/lib')
})

gulp.task('default', ['css', 'js', 'copyLib'])