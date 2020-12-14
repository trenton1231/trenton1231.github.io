let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = days[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById("dailydate").innerHTML = date;


const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

let year = new Date();
let copyright = year.getFullYear();