/**
 * Created by pengqin on 2017/1/5.
 */

if (!window.localStorage.getItem('userInfo')) {
    window.localStorage.setItem('userInfo', JSON.stringify({}));
}

const config = {
    state: {
        userInfo: {
            work_no: JSON.parse(window.localStorage.getItem('userInfo')).work_no || '',
            courtId: JSON.parse(window.localStorage.getItem('userInfo')).courtId || '',
            courtName: JSON.parse(window.localStorage.getItem('userInfo')).courtName || '',
            courtCode: JSON.parse(window.localStorage.getItem('userInfo')).courtCode || '',
            fyjc: JSON.parse(window.localStorage.getItem('userInfo')).fyjc || '',
            face: JSON.parse(window.localStorage.getItem('userInfo')).face || '',
            mobile: JSON.parse(window.localStorage.getItem('userInfo')).mobile || '',
            real_name: JSON.parse(window.localStorage.getItem('userInfo')).real_name || '',
            role: JSON.parse(window.localStorage.getItem('userInfo')).role || ''
        }
    },
    mutations: {
        setUserInfo(state, info) {
            let newInfo = Object.assign({}, config.state.userInfo, info);
            state.userInfo = newInfo;
            console.log(state.userInfo);
        }
    }
};
export default config;
