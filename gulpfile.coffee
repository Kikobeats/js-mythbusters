'use strict'

# -- Dependencies --------------------------------------------------------------

gulp        = require 'gulp'
gulpif      = require 'gulp-if'
sass        = require 'gulp-sass'
concat      = require 'gulp-concat'
cssnano     = require 'gulp-cssnano'
addsrc      = require 'gulp-add-src'
changed     = require 'gulp-changed'
prefix      = require 'gulp-autoprefixer'
strip       = require 'gulp-strip-css-comments'

isProduction = process.env.NODE_ENV is 'production'

# -- Files ---------------------------------------------------------------------

dist =
  name       : 'build'
  css        : 'assets/css'
  js         : 'assets/js'

src =
  sass:
    main   : 'assets/scss/main.scss'
    files  : ['assets/scss/**/**']

  css      :
    vendor : []

# -- Tasks ---------------------------------------------------------------------

gulp.task 'css', ->
  gulp.src src.css.vendor
  .pipe changed dist.css
  .pipe addsrc src.sass.main
  .pipe sass().on('error', sass.logError)
  .pipe concat '' + dist.name + '.css'
  .pipe gulpif(isProduction, prefix())
  .pipe gulpif(isProduction, strip all: true)
  .pipe gulpif(isProduction, cssnano())
  .pipe gulp.dest dist.css
  return

gulp.task 'build', ['css']

gulp.task 'default', ->
  gulp.start ['css']
  gulp.watch src.sass.files, ['css']
