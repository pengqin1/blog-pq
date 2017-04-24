/**
 * Created by pengqin on 2017/3/2.
 */

const dict = {
    actions: {
        updateDictData() {
            let dictService = require('services/dictService');

            // 更新字典数据
            dictService.default.get({
                s: 'AJLX,AJSLRY,BGQX,CBBM,YISHEN,ERSHEN,ZHONGSHEN,GJGZXX,SJ,SSDW,SSCYRLX,DALX,MLBT,court'
            }).then((res) => {
                window.localStorage.setItem('dictData', JSON.stringify(res.body.data));
            })
        }
    }
};

export default dict;
