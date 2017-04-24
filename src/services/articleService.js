/**
 * Created by pengqin on 2016/12/30.
 */

import xhr from './xhr/xhr';

class ArticleService {

    list(body) {
        return xhr({
            method: 'get',
            url: '/article/list',
            body: body
        });
    }

    edit(body) {
        return xhr({
            method: 'post',
            url: '/article/edit',
            body: body
        });
    }

    del(body) {
        return xhr({
            method: 'get',
            url: '/article/del',
            body: body
        });
    }

    detail(body) {
        return xhr({
            method: 'get',
            url: '/article/detail',
            body: body
        });
    }

}

export default new ArticleService();
