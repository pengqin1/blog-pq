/**
 * Created by lichao on 2017/1/4.
 */
const defaultUserFace = 'http://upyun.umu.netqq.net/static/userface.png';

module.exports = (url) => {
    if (url) {
        return url;
    } else {
        return defaultUserFace;
    }
};
