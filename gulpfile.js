const gulp = require("gulp");
const server = require("gulp-webserver");
const webpack = require("webpack-stream");
const watch = require('gulp-watch');
const del = require('del');
const sass = require("gulp-sass");

const config = require('./config');

const {server_config,webpack_config,sass_config} = config;
//热更新服务器
gulp.task("server",()=>{
    return gulp.src('./dist')
            .pipe(server(server_config));
})
//模块化打包JS
gulp.task('compile:js',()=>{
    return gulp.src('./src/javascript/**/*.js')
            .pipe(webpack(webpack_config))
            .pipe(gulp.dest('./dist/javascripts'));
})
//压缩转换scss
gulp.task('compile:scss',()=>{
    gulp.src('./src/stylesheets/**/*.scss')
        .pipe(sass(sass_config).on('error',sass.logError))
        .pipe(gulp.dest('./dist/stylesheets'));
})
//转换html
gulp.task('compile:html',()=>{
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
})
//转化lib库
gulp.task('compile:static',()=>{
    gulp.src('./src/static/**/*')
        .pipe(gulp.dest('./dist/static'))
})
//监听文件内容变化
gulp.task('watch',()=>{
    gulp.watch('./src/**/*.html',['compile:html']);
    gulp.watch('./src/javascripts/**/*',['compile:js']);
    gulp.watch('./src/stylesheets/**/*.scss',['compile:scss']);
    gulp.watch('./src/static/**/*',['compile:static'])
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

gulp.task('default',['server','compile:js','compile:static','compile:scss','compile:html','watch','gulp_watch'],()=>{
    console.log('everything is done!');
})