function setCookie(cname, cvalue, exdays) {
    if( exdays === undefined )
        exdays = 1;

    var d = new Date();
    d.setTime( d.getTime() + (exdays * 24 * 60 * 60 * 1000) );
    var expires = "expires=" + d.toUTCString();
    var newvalue = cname + "=" + cvalue + ";" + expires + ";path=/";
    document.cookie = newvalue;
}

function removeCookie(cname) {
    var d = new Date();
    var expires = "expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cname + "=" + "{}" + ";" + expires + ";path=/";
}
    

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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
    