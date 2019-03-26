'use strict';

module.exports = function (server) {
    var index = require('../controllers/controller_index');
    var authenticate = require('../controllers/controller_authenticate');
    var profile = require('../controllers/controller_profile');
    var api = require('../controllers/controller_api');

    server.route('/').get(index.index)
    server.route('/index').get(index.index)
    server.route('/login').get(index.login)
    server.route('/login').post(authenticate.login)
    server.route('/logout').get(authenticate.logout)
    server.route('/profile').get(profile.index)
    server.route('/api').get(api.index)
    server.route('/api/get_info').get(api.get_info)
    server.route('/api/get_info').post(api.get_info)
};
