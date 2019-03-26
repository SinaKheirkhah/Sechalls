'use strict';

var model_profile = require('../models/model_profile');


exports.index = function (req, res) {
    if(req.session.login === true) {
        console.log(model_profile.get_user_info(req.session.user_id))
        res.render('profile', {data: model_profile.get_user_info(req.session.user_id)})
    }else{
        res.redirect('/login')
    }
}