let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let home = 0;
let guests = 0;

function add1H() {
  home += 1;
  homeScore.textContent = home;
}

function add2H() {
  home += 2;
  homeScore.textContent = home;
}

function add3H() {
  home += 3;
  homeScore.textContent = home;
}

function add1G() {
  guests += 1;
  guestScore.textContent = guests;
}

function add2G() {
  guests += 2;
  guestScore.textContent = guests;
}

function add3G() {
  guests += 3;
  guestScore.textContent = guests;
}
