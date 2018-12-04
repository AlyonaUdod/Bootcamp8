'use strict'

const gulp = require('gulp'); // в скобках мы пишем название пакета. require - берет кусок кода и использует в этом файле
// благодаря этой команде мы подтянули все файлы, которые лежат в папке node_modules>gulp.

// мы подключаем все пакеты, которые поставили.
const sass = require('gulp-sass');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rigger = require('gulp-rigger');
const imagemin = require('gulp-imagemin');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();

// теперь надо рассказать gulp что делать.

const path = {
    src:{
        html: './src/index.html',
        scss:'./src/scss/style.scss',
        img: './src/img/*', // прописать *, чтобы брало все элементы из папки.
        fonts: './src/fonts/*',
        js : './src/js/*.js',
        htmlWatch: './src/html/*.html',
        scssWatch: './src/scss/*.scss',
        jsWatch : '.src/js/*',
    },
    dest:{
        html: 'build/',
        css: 'build/css/',
        img: 'build/',
        fonts: 'build/fonts',
    }
}

gulp.task('html', () => (
    gulp.src(path.src.html) // src - говорим gulp с каким файлом работать
    .pipe(rigger())
    .pipe(gulp.dest(path.dest.html)) // || 'build/' то же самое.
    .pipe(browserSync.stream()) // эта инструкция автоматом обновляет страницу, без нее 
));

gulp.task('scss', () => (
    gulp.src(path.src.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(path.dest.css))
    .pipe(browserSync.stream())
));

gulp.task('img', () =>(
    gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.dest.img))
 ));

gulp.task('fonts', ()=> (
    gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dest.fonts))
));

gulp.task('browser-sync', () => (
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
));

gulp.task('scripts', () =>
  gulp
    .src(path.src.js)
    .pipe(plumber())
    .pipe(
      babel({
        presets: ['env'],
      }),
    )
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./build/js'))
    // .pipe(uglify())
    // .pipe(rename('scripts.min.js'))
    // .pipe(gulp.dest('./build/js')),
);

gulp.task('watch', function () {
    gulp.watch(path.src.htmlWatch, ['html']); // в формате массива пишем какую задачу нам надо исполнить, когда произойдут изменения.
    gulp.watch(path.src.scssWatch, ['scss']);
    gulp.watch(path.src.jsWatch, ['js']);
});


gulp.task('build', callback => {
    runSequence('html',
                'scss', 
                'img',
                'fonts',
                'scripts',
                'watch',
                'browser-sync',
                callback);
  });