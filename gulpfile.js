var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        // Still compile to the /css folder but also
        // automatically copy it into both working directories.
        .pipe(gulp.dest("css"))
        .pipe(gulp.dest("newstart/css"))
        .pipe(gulp.dest("schools/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
