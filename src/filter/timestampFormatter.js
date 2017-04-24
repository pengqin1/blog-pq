/**
 * Created by lichao on 2016/12/30.
 */

let moment = require('moment');

module.exports = (timestamp, format) => {
    let result;

    timestamp = parseInt(timestamp);

    if (!timestamp) {
        result = '-';
    } else if (format) {
        result = moment(timestamp).format(format);
    } else {
        result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }

    return result;
};
