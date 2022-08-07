let home = document.getElementById('homeScore');
let guest = document.getElementById('guestScore');
let newGame = document.getElementById('newGame')

let homePoint = 0
let guestPoint = 0

//----------Home Points----------
function addHome1Point(){
    homePoint += 1
    home.textContent = homePoint
}

function addHome2Point(){
    homePoint += 2
    home.textContent = homePoint
}

function addHome3Point(){
    homePoint += 3
    home.textContent = homePoint
}

//----------Guest Points----------
function addGuest1Point(){
    guestPoint += 1
    guest.textContent = guestPoint
}

function addGuest2Point(){
    guestPoint += 2
    guest.textContent = guestPoint
}

function addGuest3Point(){
    guestPoint += 3
    guest.textContent = guestPoint
}

//----------Restart----------
function restart(){
    home.textContent = 0
    guest.textContent = 0
    
    homePoint = 0
    guestPoint = 0
}
