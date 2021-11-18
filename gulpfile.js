const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    scss: 'src/scss/**/*.scss',
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'))
}

function watchFiles() {
    watch(paths.scss, css);
}

exports.css = css;
exports.watchFiles = watchFiles;
exports.default = parallel(css, watchFiles);