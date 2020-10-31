let date = new Date();
let todaydate = date.getDate();

document.getElementById("update").innerHTML = date.toDateString();

// Friday Banner
let d = new Date();
const banner = document.getElementById("alert");
if (d.getDate() == 3) {
    banner.style.display = "content";
} else {
    banner.style.display = "none";
}