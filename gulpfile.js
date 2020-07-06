const del = require('del');
const gulp = require('gulp');

const babel = require('gulp-babel');
const connect = require('gulp-connect');
const eslint = require('gulp-eslint');
const open = require('gulp-open');

////////////////////////////////////////////////////////////////////////////////

function clean() {
	return del('./dist/');
}

////////////////////////////////////////////////////////////////////////////////

const buildJsSrc = './src/**/*.js';
function buildJs() {
	return gulp.src(buildJsSrc, { since: gulp.lastRun(buildJs) })
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(babel())
		.pipe(gulp.dest('./dist/'))
		.pipe(connect.reload());
}
function watchJs() {
	gulp.watch(buildJsSrc, buildJs);
}

const buildOtherSrc = './src/**/*.html';
function buildOther() {
	return gulp.src(buildOtherSrc, { since: gulp.lastRun(buildOther) })
		.pipe(gulp.dest('./dist/'))
		.pipe(connect.reload());
}
function watchOther() {
	gulp.watch(buildOtherSrc, buildOther);
}

const build = gulp.parallel(buildJs, buildOther);
const watch = gulp.parallel(watchJs, watchOther);

////////////////////////////////////////////////////////////////////////////////

function serve() {
	const serverOptions = { livereload: true, port: 8080, root: '.', https: true };
	connect.server(serverOptions);

	gulp.src(__filename)
			.pipe(open({ app: null, uri: `${serverOptions.https ? 'https' : 'http' }://localhost:${serverOptions.port}/` }));
}

////////////////////////////////////////////////////////////////////////////////

module.exports = {
	default: gulp.series(clean, build),
	build: gulp.series(clean, build),
	watch: gulp.series(clean, build, watch),
	serve: gulp.series(clean, build, gulp.parallel(watch, serve))
};
