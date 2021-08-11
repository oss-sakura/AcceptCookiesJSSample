var _IsAcceptCookie = '_IsAcceptCookie';
var _AcceptFooterId = 'acceptfotter';

function showAcceptCookiesBanner() {
    var cookies = document.cookie.split( '; ' )
    for (let i=0; i<cookies.length; i++) {
        var n = cookies[i].split('=')[0]
        var v = cookies[i].split('=')[1]
        if (n == _IsAcceptCookie && v == 'yes') {
            document.getElementById(_AcceptFooterId).style.display = "none"
        }
    }
}

function acceptCookies() {
    document.cookie = _IsAcceptCookie + '=yes';
    document.getElementById(_AcceptFooterId).style.display = "none"
}
