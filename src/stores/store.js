import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import config from './modules/config';
// import Nav from './modules/nav';
// import user from './modules/user';
// import dict from './modules/dict';

const store = new Vuex.Store({
    modules: {
        config
        // Nav,
        // user,
        // dict
    }
});

export default store;
