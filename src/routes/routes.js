import Vue from 'vue'
import VueRouter from 'vue-router'
import nav from 'static/js/nav.js'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'default_login',
    component: resolve => require(['views/login.vue'], resolve)
}, {
    path: '/login',
    name: 'login',
    component: resolve => require(['views/login.vue'], resolve)
}, {
    path: '/manage',
    name: 'manage',
    component: resolve => require(['components/manage.vue'], resolve),
    redirect: '/manage/home',
    children: [{
        path: '404',
        name: '404',
        component: resolve => require(['views/404.vue'], resolve)
    }, {
        path: '500',
        name: '500',
        component: resolve => require(['views/500.vue'], resolve)
    }, {
        path: 'noPermission',
        name: 'noPermission',
        component: resolve => require(['views/noPermission.vue'], resolve)
    }, {
        path: 'user/account',
        name: 'account',
        component: resolve => require(['views/user/account.vue'], resolve)
    }, {
        path: 'article/list',
        name: 'articleList',
        component: resolve => require(['views/article/list.vue'], resolve)
    }, {
        path: 'article/create',
        name: 'articleCreate',
        component: resolve => require(['views/article/edit.vue'], resolve)
    }, {
        path: 'article/edit/:id',
        name: 'articleEdit',
        component: resolve => require(['views/article/edit.vue'], resolve)
    }, {
        path: 'article/detail/:id',
        name: 'articleDetail',
        component: resolve => require(['views/article/detail.vue'], resolve)
    }]
}, {
    path: '*',
    redirect: '/manage/404'
}]

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: routes
})

router.beforeEach((to, from, next) => {
    // let hasPermission = nav.updateActiveMenu(to.name);
    // if (hasPermission) {
        next();    // 有权限
    // } else {
        // router.push('/manage/noPermission');   // 无权限
    // }
})

export default router
