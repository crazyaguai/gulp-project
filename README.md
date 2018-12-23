### 基于 gulp4、browserSync、browserify、babel7 的前端脚手架

---
#### 环境依赖
- node v8.11.1
- npm 6.1.0
- gulp-CLI version 2.0.1

#### 运行步骤
1. 安装依赖
```
npm install || yarn
```
2. 开发环境
```
npm start
```
3. 打包代码
```
npm run build
```

#### 项目结构
```
├── gulp //gulp任务配置
├── src //项目代码
│   ├── entry //入口
│   │    ├── js //js入口文件夹
│   │    ├── scss //css入口文件夹
│   │    └── html //html入口文件夹
│   ├── img //图片
│   ├── module //代码文件夹,可以将vue组件写在这里
│   ├── static //配置控制
├── dist //npm run build 打包代码存放文件夹
├── dev //npm start 开发环境代码存放文件夹
├── .babelrc //babel配置
├── .browserslistrc //运行浏览器环境配置
├── gulpfile.babel.js //gulp配置
└── package.json
```

#### 项目介绍

---
