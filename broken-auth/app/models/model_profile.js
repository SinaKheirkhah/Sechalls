const md5 = require('md5');

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = lowdb(adapter)


exports.get_user_info = function (userid) {

    var data = db.get('credentials').find({
        id: userid
    }).value()

    delete data.pass
    return data
}