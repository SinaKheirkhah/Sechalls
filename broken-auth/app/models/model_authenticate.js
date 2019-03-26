const md5 = require('md5');

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = lowdb(adapter)


exports.check_credentials = function (username, password) {

    if (username === undefined | password === undefined) {
        return false;
    } else {

        var login = db.get('credentials').find({
            user: username,
            pass: md5(password)
        }).value()

        if (login !== undefined) {
            return login
        } else {
            return false
        }
    }
}

exports.check_cookie = function (userid, username) {
    return db.get('credentials').find({
        id: userid,
        user: username
    }).value()
}

exports.get_hmac_key = function () {

    return (db.get('config').find({}).value()).hmac_key

}