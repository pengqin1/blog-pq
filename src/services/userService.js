/**
 * Created by pengqin on 2016/12/30.
 */

import xhr from './xhr/xhr';

class UserService {

    login(body) {
        return xhr({
            method: 'post',
            url: '/user/login',
            body: body
        });
    }

    getAccount(body) {
        return xhr({
            method: 'get',
            url: '/user/getAccount',
            body: body
        });
    }

    editAccount(body) {
        return xhr({
            method: 'post',
            url: '/user/editAccount',
            body: body
        });
    }

    delAccount(body) {
        return xhr({
            method: 'get',
            url: '/user/delAccount',
            body: body
        });
    }
}

export default new UserService();
