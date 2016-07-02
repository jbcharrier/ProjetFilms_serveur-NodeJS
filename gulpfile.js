var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var DEST = 'dist/';


gulp.task('html', function(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest(DEST));
});


gulp.task('serve', function(){
    browsersync.init({
        server: {
            baseDir: ["./src", './']
        }
    });
});


gulp.task('live-reload', function(){
    browsersync.init({
        server: './dist'
    });

    gulp.watch("./dist/*.html").on('change', browsersync.reload);
    gulp.watch("./dist/*.js").on('change', browsersync.reload);
});