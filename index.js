let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let currentScore = parseInt(homeScore.textContent)

// increaseOne()
// {
//    homeScore.innerText = homeScore.innerText +1
//    console.log(homeScore)
// }
// document.getElementById("plus-one-point").addEventListener("click", increaseOne);

function increaseOneToHome() {
    let currentScore = parseInt(homeScore.textContent)
    let newHomeScore = currentScore +1
    homeScore.textContent = newHomeScore
}

function increaseOneToGuest() {
    let currentScore = parseInt(guestScore.textContent)
    let newGuestScore = currentScore +1
    guestScore.textContent = newGuestScore
}

function increaseTwoToHome() {
    let currentScore = parseInt(homeScore.textContent)
    let newHomeScore = currentScore +2
    homeScore.textContent = newHomeScore
}

function increaseTwoToGuest() {
    let currentScore = parseInt(guestScore.textContent)
    let newGuestScore = currentScore +2
    guestScore.textContent = newGuestScore
}

function increaseThreeToHome() {
    let currentScore = parseInt(homeScore.textContent)
    let newHomeScore = currentScore +3
    homeScore.textContent = newHomeScore
}

function increaseThreeToGuest() {
    let currentScore = parseInt(guestScore.textContent)
    let newGuestScore = currentScore +3
    guestScore.textContent = newGuestScore
}

function reset() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}