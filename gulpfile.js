const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('concatless', (done) => {
  gulp.src('src/styles/index.less')
  .pipe(less({javascriptEnabled: true}))
  .pipe(gulp.dest('src/css'))
  done()
})

