const jsonp = require('jsonp');
export function getJSON(url, param) {
    return new Promise((resolve, reject) => {
        jsonp(url, null, (err, param) => {
            if (err) {
                reject(err);
            } else {
                resolve(param);
            }
        });
    });
};
