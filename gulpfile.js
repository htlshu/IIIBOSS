const gulp = require("gulp");
const server = require("gulp-webserver");
const webpack = require("webpack-stream");
const watch = require('gulp-watch');
const del = require('del');

const config = require('./config');

const {server_config,webpack_config,sass_config} = config;
//热更新服务器
gulp.task("server",()=>{
    return gulp.src('./dist')
            .pipe(server(server_config));
})
//模块化打包JS
gulp.task('compile:js',()=>{
    return gulp.src('./src/js/**/*.js')
            .pipe(webpack(webpack_config))
            .pipe(gulp.dest('./dist'));
})
//压缩转换scss
gulp.task('compile:scss',()=>{
    gulp.src('./src/css/**/*.scss')
        .pipe(sass_config)
        .pipe(gulp.dest('./dist'));
})
//转换html
gulp.task('compile:html',()=>{
    gulp.src('./src/html/**/*.html')
        .pipe(gulp.dest('./dist'))
})
//监听文件内容变化
gulp.task('watch',()=>{
    gulp.watch('./src/**/*.html',['compile:html']);
    gulp.watch('./src/js/**/*',['compile:js']);
    gulp.watch('./src/css/**/*.scss',['compile:scss']);
})
//监听目录变化
gulp.task('gulp_watch',()=>{
    watch('./src/**/*',(v)=>{
        if(v.event === 'unlink'){
            let _path = v.history[0].replace('\src','\dist');
            del(_path);
        }else{
            gulp.start(['watch'])
        }
    })
})

gulp.task('default',['server','compile:js','compile:scss','compile:html','watch','gulp_watch'],()=>{
    console.log('everything is done!');
})