function setCookie(e, o, t) {
    var n, c = "";
    t && ((n = new Date).setTime(n.getTime() + 24 * t * 36e5), c = "; expires=" + n.toUTCString()),
    document.cookie = e + "=" + (o || "") + c + "; path=/"
}
function getCookie(e) {
    for (var o = e + "=", t = document.cookie.split(";"), n = 0; n < t.length; n++) {
        for (var c = t[n];
        " " === c.charAt(0);) c = c.substring(1, c.length);
        if (0 === c.indexOf(o)) return c.substring(o.length, c.length)
    }
    return null
}
function eraseCookie(e) {
    document.cookie = e + "=; Max-Age=-99999999;"
}
function acceptAllCookies() {
    setCookie("cookies_accepted", "true", 365),
    setCookie("preferences_accepted", "true", 365),
    setCookie("analytics_accepted", "true", 365),
    document.getElementById("cookie-banner").style.display = "none",
    alert("Tous les cookies accept\xe9s.")
}
function declineAllCookies() {
    eraseCookie("cookies_accepted"),
    eraseCookie("preferences_accepted"),
    eraseCookie("analytics_accepted"),
    document.getElementById("cookie-banner").style.display = "none",
    alert("Tous les cookies refus\xe9s.")
}
function managePreferences() {
    document.getElementById("cookie-preferences-modal").style.display = "block"
}
function closePreferences() {
    document.getElementById("cookie-preferences-modal").style.display = "none"
}
function savePreferences() {
    var e = document.getElementById("preferences-cookies").checked,
    o = document.getElementById("analytics-cookies").checked;
    setCookie("preferences_accepted", e.toString(), 365),
    setCookie("analytics_accepted", o.toString(), 365),
    document.getElementById("cookie-preferences-modal").style.display = "none",
    document.getElementById("cookie-banner").style.display = "none",
    alert("Vos pr\xe9f\xe9rences ont \xe9t\xe9 enregistr\xe9es.")
}
window.onload;
