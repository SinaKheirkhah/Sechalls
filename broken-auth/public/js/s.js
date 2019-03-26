// Code goes here

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var r = document.getElementsByName('0')[0].value

        if (r == '1') {
            var key = document.getElementsByName('1')[0].value
            var expire = document.getElementsByName('2')[0].value
            var user = document.getElementsByName('3')[0].value

            localStorage.setItem('r', true)
            localStorage.setItem('k', key)
            localStorage.setItem('e', expire)
            localStorage.setItem('u', user)
        }
    }
}
