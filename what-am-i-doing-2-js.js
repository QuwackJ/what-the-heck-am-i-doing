// This is for the prompt box

let name = prompt("I am once again asking for your support (Please enter your name)");
document.getElementById("msg").innerHTML = "Hello, " + name + ". I have no idea what this page is, but feel free to press the buttons here."

// Audio Functions

let baby = document.getElementById("baby");
let ugly = document.getElementById("ugly");
let cocaine = document.getElementById("cocaine");
let lie = document.getElementById("lie");

function playBaby() {
    baby.play();
}

function pauseBaby() {
    baby.pause();
}

function playUgly() {
    ugly.play();
}

function pauseUgly() {
    ugly.pause();
}

function playCocaine() {
    cocaine.play();
}

function pauseCocaine() {
    cocaine.pause();
}

function playLie() {
    lie.play();
}

function pauseLie() {
    lie.pause();
}
