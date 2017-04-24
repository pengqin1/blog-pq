/**
 * Created by lichao on 2016/12/30.
 */
class Util {
    parseParam(param) {
        if (param) {
            return Object.keys(param).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(param[key]);
            }).join('&');
        }
        return '';
    }
}

export default new Util();
