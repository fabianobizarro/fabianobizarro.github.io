var gulp = require('gulp');
var uglify = require('gulp-uglify');


gulp.task('fonts', function(){
    gulp.src([
        'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
        'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
        'node_modules/font-awesome/fonts/fontawesome-webfont.ttf'
    ])
    .pipe(gulp.dest('fonts/'))
});

gulp.task('default', ['fonts'], function(){
    gulp.src([
        'node_modules/bulma/css/bulma.css', 
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])
    .pipe(gulp.dest('assets'));
});