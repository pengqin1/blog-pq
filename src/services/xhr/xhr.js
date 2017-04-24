/**
 * Created by pengqin on 2016/12/30.
 */

import Vue from 'vue';
import util from 'util/util';
import {rootPath, successHandler, errHandler} from './config.js';
import store from 'stores/store.js'

Vue.http.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.options.emulateJSON = true;
Vue.http.options.credentials = true;

let ajaxNum = 0;
Vue.http.interceptors.push((request, next) => {
    store.commit('updateFullLoading', true);
    ajaxNum++;
    next((response) => {
        ajaxNum--;
        if (ajaxNum === 0) {
            store.commit('updateFullLoading', false);
        }
        return response
    });
});

export default ({url, body, method = 'get', contextName = true, diyError = false}) => {
    url = rootPath(contextName) + url;

    return new Promise((resolve, reject) => {
        if (method.toUpperCase() === 'GET') {
            url += ('?' + util.parseParam(body));
            body = {};
        }
        Vue.http[method](url, body).then((response) => {
            // if (response.body.code === 200) {
                resolve(response);
            // }
        }, (response) => {
            reject(response);
            if (!diyError) {
                errHandler(response);
            }
        });
    });
};
