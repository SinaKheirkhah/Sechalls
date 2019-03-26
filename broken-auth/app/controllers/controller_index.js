'use strict';

var md5 = require('md5')
var model_authentication = require('../models/model_authenticate');

exports.index = function (req, res) {
    res.render('index', { id: req.session.user_id })
}

exports.login = function (req, res) {
    var remember_cookie = req.cookies.rc

    if (req.session.login === true) {
        res.redirect('profile')
    } else if (remember_cookie !== undefined) {
        var cookie = (Buffer.from(remember_cookie, 'base64').toString()).split("|");

        var userid = Buffer.from(cookie[0], 'base64').toString()
        var username = cookie[1]
        var hmac = Buffer.from(cookie[2]).toString()

        if (hmac === md5(model_authentication.get_hmac_key() + Buffer.from(userid).toString('base64') + username)) {
            var result = model_authentication.check_cookie(userid, username)

            console.log(result)
            if (result !== undefined) {
                req.session.user_id = result.id;
                req.session.display_name = result.display_name;
                req.session.login = true;

                res.redirect('profile')
            } else {
                res.render('login_page', {login_name: req.cookies.username})
            }

        } else {
            // res.end('Integrity failed.')
            res.render('login_page', {login_name: req.cookies.username})
        }
    } else {
        res.render('login_page', {login_name: req.cookies.username})
    }
}