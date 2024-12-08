let homeScore = 0
let guestScore = 0
document.getElementById("home-score").textContent = homeScore
document.getElementById("guest-score").textContent = guestScore

let newGame = document.getElementById("new-game")

// HOME SCORE TABLE

function hp1() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function hp2() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function hp3() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}

// GUEST SCORE TABLE
function gp1() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function gp2() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function gp3() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function restart () {
    let homeScore = 0
    let guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}


