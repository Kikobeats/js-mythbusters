'use strict'

# -- Dependencies --------------------------------------------------------------

gulp        = require 'gulp'
gutil       = require 'gulp-util'
sass        = require 'gulp-sass'
concat      = require 'gulp-concat'
cssmin      = require 'gulp-cssmin'
addsrc      = require 'gulp-add-src'
changed     = require 'gulp-changed'
shorthand   = require 'gulp-shorthand'
prefix      = require 'gulp-autoprefixer'
strip       = require 'gulp-strip-css-comments'

printError = (err) -> gutil.log err.toString()

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
  .pipe sass().on 'error', printError
  .pipe concat '' + dist.name + '.css'
  .pipe prefix()
  .pipe strip all: true
  .pipe shorthand()
  .pipe cssmin()
  .pipe gulp.dest dist.css
  return

gulp.task 'build', ['css']

gulp.task 'default', ->
  gulp.start ['css']
  gulp.watch src.sass.files, ['css']
