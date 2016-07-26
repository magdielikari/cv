/*
* Dependencias
*/
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    path = require('path'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
/*
* Configuración de la tarea 'demo'
*/
gulp.task('demo', function () {
  gulp.src('dev/js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
});

gulp.task('default',function(){
   gulp.src('dev/less/main.less')
   .pipe(less({
    plugins: [autoprefix]
  }))
   .pipe(gulp.dest('dist/css/style.css'));
          })
//   gulp.src('node_modules/flexboxgrid/css/flexboxgrid.css')
