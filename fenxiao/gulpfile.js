const path = require('path');

const gulp = require('gulp');

const less = require('gulp-less');

const sourcemaps = require('gulp-sourcemaps');
// var cleanCSS = require('gulp-clean-css');

const postcss = require('gulp-postcss');

const cssnano = require('cssnano');

const autoprefixer = require('autoprefixer');

const del = require('del');

const gulpSequence = require('gulp-sequence');

const connect = require('gulp-connect');

const rename = require('gulp-rename');

const gulpAutoprefixer = require('gulp-autoprefixer');

// 编译 less 为 css
gulp.task('less', function() {
	return gulp.src('./src/less/index.less')
		.pipe(sourcemaps.init())
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('autocss', function() {
	var plugins = [
		autoprefixer({
			browsers: [
				'> 0.5%',
				'last 2 versions',
				'Firefox > 20',
				'not dead',
				'iOS > 7',
				'Android > 4'
			]
		}),
		cssnano()
	];
	return gulp.src('./dist/css/index.css')
		.pipe(postcss(plugins))
		.pipe(rename('index.min.css'))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('copyhtml', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'));
});
gulp.task('copycss', function() {
	return gulp.src('src/css/*.css')
		.pipe(gulp.dest('dist/css/'));
});
gulp.task('copyimg', function() {
	return gulp.src('src/img/*.*')
		.pipe(gulp.dest('dist/img/'));
});

gulp.task('copyimgIcon', function() {
	return gulp.src('src/img/icon/*.*')
		.pipe(gulp.dest('dist/img/icon/'));
});
gulp.task('copyimgSvg', function() {
	return gulp.src('src/img/svg/*.svg')
		.pipe(gulp.dest('dist/img/svg/'));
});
gulp.task('copyjs', function() {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('dist/js/'));
});
// 删除文件夹
gulp.task('clean', function(cb) {
	del([
		'dist'
	], cb);
});

gulp.task('serve', function() {
	connect.server({
		root: "dist",
		livereload: true,
		port: 8002
	});
});
gulp.task('reload', function() {
	gulp.src('./dist/*.html')
		.pipe(connect.reload());
});
// 复制src中的静态资源到dist文件夹中
gulp.task('copy', gulpSequence('copyhtml', 'copycss', 'copyimg', 'copyimgIcon','copyimgSvg', 'copyjs'));

// 全部编译
gulp.task('build', gulpSequence('copy', 'css', 'serve', 'watch'));
gulp.task('css', gulpSequence('less', 'autocss'));

// 监视文件自动编译
gulp.task('watch', function() {
gulp.watch('src/less/*.less', ['less', 'reload']);
	gulp.watch('src/*.html', ['copyhtml', 'reload']);
	gulp.watch('src/img/*.*', ['copyimg', 'reload']);
	gulp.watch('src/img/icon/*.*', ['copyimgIcon', 'reload']);
	gulp.watch('src/img/svg/*.svg', ['copyimgSvg', 'reload']);
	gulp.watch('src/js/*.js', ['copyjs', 'reload']);
});
