'use strict';

var model_api = require('../models/model_api');


exports.index = function (req, res) {
    res.end('Invalid Path')
}

exports.get_info = function (req, res) {
    if (req.method.toLowerCase == 'get'){
        res.end('Bad HTTP Method')
    }else{
        console.log(req.params)
        var user_id = req.body.user_id
        if (user_id === undefined ){
            res.end('Action incomplete, required parameter: user_id')
        }else{
            res.end(JSON.stringify(model_api.get_user_info(user_id)))
        }
    }
}