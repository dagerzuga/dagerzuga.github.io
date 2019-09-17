const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass');

gulp.task('default', () =>{
    browserSync.init({
        server: './'
    })
    gulp.watch('./assets/sass/**/*.scss', gulp.series('sass'));
    gulp.watch(['./*.html', './assets/css/style.css', './assets/js/*.js']).on('change', browserSync.reload)

});

gulp.task('sass', ()=>
    gulp.src('./assets/sass/style.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))

        .pipe(gulp.dest('./assets/css/'))
);