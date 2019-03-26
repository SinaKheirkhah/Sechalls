const md5 = require('md5');

const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = lowdb(adapter)


exports.get_user_info = function (userid) {

    try {
        var data = db.get('credentials').find({
            id: userid
        }).value()
    
        delete data.pass
        return data
      }
      catch (e) {
        return {'error': 'user not found'} // pass exception object to error handler
      }

}