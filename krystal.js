
var myVideo1 = document.getElementById("video2");

function playPause() {
    if (myVideo1.paused)
        myVideo1.play();
    else
        myVideo1.pause();
}

function makeBig() {
    myVideo1.width = 280;
}

function makeSmall() {
    myVideo1.width = 200;
}

function makeNormal() {
    myVideo1.width = 250;
}
