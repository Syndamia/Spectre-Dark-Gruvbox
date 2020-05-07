const gulp = require('gulp');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug');

var paths = {
  source: './src/*.scss',
  doc: './docs/src/scss/*.scss'
};

function docsScss() {
  return gulp.src(paths.source)
  .pipe(sass({outputStyle: 'compact', precision: 10})
    .on('error', sass.logError)
  )
  .pipe(autoprefixer())
  .pipe(csscomb())
  .pipe(gulp.dest('./docs/dist'))
  .pipe(cleancss())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('./docs/dist'));
}

function docsPug() {
  return gulp.src('docs/src/**/!(_)*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
}

function docsBuild () {

  return gulp.src(paths.doc)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./docs/dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./docs/dist'));
}

function build() {

  return gulp.src(paths.source)
    .pipe(sass({outputStyle: 'compact', precision: 10})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'));

}

function watch()
{
  return gulp.watch(["./**/*.scss", "./**/*.pug"], gulp.parallel(build, docs, docsPug, docsScss));
}

exports.watch = watch;
exports.docs = gulp.series(docsBuild, docsPug, docsScss);
exports.build = build;
exports.default = build;
