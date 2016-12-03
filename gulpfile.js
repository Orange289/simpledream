"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require('gulp-csso');
var rename = require('gulp-rename');
var run = require('run-sequence');
var del = require('del');

gulp.task('clean', function() {
	return del('build');
});

gulp.task('copy', function() {
	return gulp.src([
		'fonts/**/*.{woff,woff2}',
		'css/**',
		'img/**',
		'js/**',
		'*.html'
	], {
		base: '.'
	})
	.pipe(gulp.dest('build'));
});

gulp.task("style", function() {
	gulp.src("less/style.less")
		.pipe(plumber())
		.pipe(less())
		.pipe(postcss([
			autoprefixer({browsers: [
				"last 1 version",
				"last 2 Chrome versions",
				"last 2 Firefox versions",
				"last 2 Opera versions",
				"last 2 Edge versions"
			]})
		]))
		.pipe(gulp.dest("css"))
		.pipe(minify())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('css'))
		.pipe(server.reload({stream: true}));
});

gulp.task("serve", ["style"], function() {
	server.init({
		server: ".",
		notify: false,
		open: true,
		ui: false
	});

	gulp.watch("less/**/*.less", ["style"]);
	gulp.watch("*.html").on("change", server.reload);
});

gulp.task('build', function(fn) {
	run(
		'clean',
		'copy',
		'style',
		fn
	);
});
