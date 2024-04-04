'use strict'

const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const gulp = require('gulp')

const src = {
  css: ['src/sass/style.scss'],
  js: ['src/js/main.js']
}

const dist = {
  path: 'docs',
  name: {
    css: 'style',
    js: 'main'
  }
}

const css = () =>
  gulp
    .src(src.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(`${dist.name.css}.min.css`))
    .pipe(
      postcss([
        require('postcss-focus'),
        require('cssnano')({
          preset: require('cssnano-preset-advanced')
        })
      ])
    )
    .pipe(gulp.dest(dist.path))

const js = () =>
  gulp
    .src(src.js)
    .pipe(concat(`${dist.name.js}.min.js`))
    .pipe(uglify())
    .pipe(gulp.dest(dist.path))

const build = gulp.parallel(css, js)

const watch = () => {
  gulp.watch(src.css, css)
  gulp.watch(src.js, js)
}

exports.build = build
exports.css = css
exports.js = js
exports.watch = watch
exports.default = gulp.series(build, watch)
