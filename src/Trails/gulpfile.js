/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

var paths = {
    webroot: "./wwwroot/"
};

paths.bootstrapCss = "./node_modules/startbootstrap-sb-admin-2/bower_components/bootstrap/dist/css/bootstrap.css";
paths.metisMenuCss = "./node_modules/startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.css";
paths.sbAdminCss = "./node_modules/startbootstrap-sb-admin-2/dist/css/sb-admin-2.css";
paths.fontAwesomeCss = "./node_modules/startbootstrap-sb-admin-2/bower_components/font-awesome/css/font-awesome.css";
paths.morrisCss = "./node_modules/startbootstrap-sb-admin-2/bower_components/morrisjs/morris.css";

paths.jqueryJs = "./node_modules/startbootstrap-sb-admin-2/bower_components/jquery/dist/jquery.js";
paths.bootstrapJs = "./node_modules/startbootstrap-sb-admin-2/bower_components/bootstrap/dist/js/bootstrap.js";
paths.metisMenuJs = "./node_modules/startbootstrap-sb-admin-2/bower_components/metisMenu/dist/metisMenu.js";
paths.raphaelJs = "./node_modules/startbootstrap-sb-admin-2/bower_components/raphael/raphael.js";
paths.morrisJs = "./node_modules/startbootstrap-sb-admin-2/bower_components/morrisjs/morris.js";

paths.fonts = "./node_modules/startbootstrap-sb-admin-2/bower_components/font-awesome/fonts/*";

paths.jsDest = paths.webroot + "js";
paths.cssDest = paths.webroot + "css";
paths.fontDest = paths.webroot + "fonts";

gulp.task("min:js", function () {
    return gulp.src([paths.jqueryJs, paths.bootstrapJs, paths.metisMenuJs, paths.raphaelJs, paths.morrisJs])
        .pipe(concat(paths.jsDest + "/site.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("copy:js", function () {
    return gulp.src([paths.jqueryJs, paths.bootstrapJs, paths.metisMenuJs, paths.raphaelJs, paths.morrisJs])
        .pipe(gulp.dest(paths.jsDest));
});

gulp.task("min:css", function () {
    return gulp.src([paths.bootstrapCss, paths.metisMenuCss, paths.sbAdminCss, paths.fontAwesomeCss, paths.morrisCss])
        .pipe(concat(paths.cssDest + "/site.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("copy:css", function () {
    return gulp.src([paths.bootstrapCss, paths.metisMenuCss, paths.sbAdminCss, paths.fontAwesomeCss, paths.morrisCss])
        .pipe(gulp.dest(paths.cssDest));
});

gulp.task("copy:fonts", function () {
    return gulp.src([paths.fonts])
        .pipe(gulp.dest(paths.fontDest));
});

gulp.task("min", ["min:js", "min:css"]);
gulp.task("copy", ["copy:js", "copy:css", "copy:fonts"]);
