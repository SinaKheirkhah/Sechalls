var model_authentication = require('../models/model_authenticate');

function current_time() {
    return Math.floor(Date.now() / 1000)
}

exports.login = function (req, res) {

    var result = model_authentication.check_credentials(req.body.username, req.body.password, req.body.remember)
    if (result !== false) {

        req.session.user_id = result.id;
        req.session.display_name = result.display_name;
        req.session.login = true;

        var data = {}
        if (req.body.remember === 'true') {

            var hmac_key = model_authentication.get_hmac_key()

            data = {
                id: result.id,
                remember: 1,
                key: hmac_key,
                expires: current_time() + 25200,
                user: result.user
            }

            res.cookie('userid', Buffer.from(result.id, 'utf8').toString('base64'), { maxAge: 25200});
        }

        res.cookie('username', result.user, { maxAge: 25200});
        res.render('redirect_to_profile', { cookie_data: data })
    } else {
        res.redirect('/login')
    }
}


exports.logout = function (req, res) {
    req.session.user_id = null;
    req.session.display_name = null;
    req.session.login = null;

    res.cookie('userid', 'deleted', { maxAge: 0});
    res.cookie('rc', 'deleted', {maxAge: 0});

    res.redirect('/')
}