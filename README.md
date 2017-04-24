# PengQin的博客

> A Vue.js project

目前主要实现了一些基础功能，包含：登录，账号新增、编辑、删除，博客的查询、详情、新增（还未加入富文本编辑器和markdown）、编辑、删除，后续还会不断完善及优化

## 技术栈

前端基于webpack + vue2 + vueRouter + vueResource + element-ui
后端基于node + mongodb + express


## 整体思路

前端页面的搭建及渲染采用webpack+vue2及element-ui，vueResource实现与后端的数据交互，路由跳转也放在前端，采用vueRouter; Node服务端只用来接收请求，查询数据库并用来返回值，数据库用mongoDB，并在Express中通过mongoose操作mongoDB

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



### 运行步骤

```bash
# 进入server
node index

# 回到根目录
npm run dev
```

