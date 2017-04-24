/**
 * Created by pengqin on 2016/12/30.
 */
import router from 'routes/routes.js'
import { Message, MessageBox } from 'element-ui'

export const rootPath = (contextName) => {
    let ROOT = ''; 
    const CONTEXT_NAME = contextName ? '/api' : '';

    // if (window.location.hostname === 'localhost') {
    //     ROOT = 'http://dev.dams.local';   // dams.odata.me dev.dams.local
    // } else {
    //     ROOT = '';
    // }

    if (window.CHANGE_ROOT) {
        return '//' + window.CHANGE_ROOT;
    } else {
        return ROOT + CONTEXT_NAME;
    }
};

export const errHandler = (res) => {
    let code = res.body.code;
    let status = res.body.status;
    let msg = res.body.message;

    switch (code) {
        case 10:
            if (status === 403) {
                MessageBox.alert('您当前的会话已超时，请重新登录', '错误提示', {
                    confirmButtonText: '去登录',
                    callback: () => {
                        router.push('/login');
                    }
                });
            } else {
                let filed = JSON.stringify(JSON.parse(msg).errorFields);
                let msgs = filed || msg;
                MessageBox.alert(msgs, '错误提示');
            }
            break;
        case 20:
            // if (status === 403) {
            //     router.push('/manage/noPermission');   // 无权限
            // } else {
                Message.error(msg);
            // }
            break;
        case 400:
            Message.error(msg);
            break;
        case 404:
            router.push('/manage/404');
            break;
        case 500:
            router.push('/manage/500');
            break;
        default:
            Message.error(msg);
            break;
    }
};

let EventUtil = {
    addHandler: (element, type, handler) => {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    }
};
EventUtil.addHandler(window, 'online', () => {
    Message.success('网络连接已恢复');
});
EventUtil.addHandler(window, 'offline', () => {
    MessageBox.alert('请确认网络是否连通，否则会造成当前工作丢失', '掉线了？', {
        confirmButtonText: '好的，我知道了'
    });
});
