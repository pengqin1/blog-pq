import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'static/css/element-ui-extend.scss'
import 'static/css/main.scss'

Vue.use(VueResource)
Vue.use(ElementUI)

import 'src/filter/index.js';

import store from 'src/stores/store.js'
import router from 'src/routes/routes.js'

new Vue({
    store: store,
    router: router,
    render: h => h(App)
}).$mount('#app')
