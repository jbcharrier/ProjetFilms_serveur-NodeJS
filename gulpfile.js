var gulp = require('gulp');
//var minify = require('gulp-minify');
//var concat = require('gulp-concat');
var browsersync = require('browser-sync').create();
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');

//var DESTSRC = 'dist/src';
var DEST = 'dist/';


gulp.task('html', function(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest(DEST));
});

// gulp.task('build', ['html'],  function(){
//
//
//     return gulp.src('src/*.js')
//         //.pipe(concat('index.js', 'bower_components/jquery/dist/jquery.min.js'))
//         .pipe(gulp.dest(DESTSRC))
//         .pipe(minify())
//         .pipe(uglify())
//         .pipe(rename( '.min.js'))
//         .pipe(gulp.dest(DESTSRC));
//
// });

gulp.task('serve', function(){
    browsersync.init({
        server: {
            baseDir: "./src"
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