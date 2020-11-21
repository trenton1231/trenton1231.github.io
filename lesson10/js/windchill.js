var h = document.getElementById("high").innerHTML;
var s = document.getElementById("speed").innerHTML;
h = parseInt(h)
s = parseInt(s)
if (h <= 50 && s >= 3.0) {
    var windChill
    windChill = 35.74 + (0.6215 * h) - (35.75 * s ** 0.16) + (0.4275 * h * (s ** 0.16))
    windChill = Math.round(windChill)
} else {
    windChill = "N/A"
}

document.getElementById("chill").innerHTML = windChill