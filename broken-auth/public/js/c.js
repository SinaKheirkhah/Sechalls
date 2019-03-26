function h2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

function set_cookie(cname, cvalue, ex) {
    var d = new Date();
    d.setTime(d.getTime() + parseInt(ex));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function get_cookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        var r = localStorage.getItem('r')

        if (r == 'true') {
            var k = localStorage.getItem('k')
            var e = localStorage.getItem('e')
            var u = localStorage.getItem('u')

            ui = decodeURIComponent(get_cookie('userid'))
            var data = ui + '|' + u + '|' + calcMD5(k + ui + u)
            set_cookie('rc', btoa(data), e)

            localStorage.removeItem('r')
            localStorage.removeItem('k')
            localStorage.removeItem('e')
            localStorage.removeItem('u')
        }
    }
}
