var isDay = true;
var isCat = false;
var isRaining = false;


function playMusic(audio) {
    var music = document.getElementById(audio);
    //music.play();
    if (!music.paused) {
        music.pause();
    }
    else {
        music.play();
    }
}

function dayCycle(changeToDay) {
    var overlayGrad = document.getElementById('overlay');
    if (changeToDay) {
        isDay = true;
        isRaining = false;
        stop();
    }
    else if (!changeToDay && isDay) {
        isDay = false;
        startRain();
    }
    else if (!changeToDay && !isDay) {
        isDay = true;
        startRain();
    }
}

window.onload = function () {
    var button = document.getElementById("startButton");
    button.addEventListener("click", startRide);
}


function addCat() {
    if (!isCat) {
        var num = Math.ceil(Math.random() * 3);
        var catImage = document.createElement("div");
        catImage.setAttribute('id', "sleepingCat");
        console.log(num);
        catImage.style.backgroundImage = "url(images/catSleep" + num + ".png)";
        document.getElementById("train").appendChild(catImage);
        isCat = true;
    } else {
        deleteCat();
        isCat = false;
    }
}

function deleteCat() {
    var catImage = document.getElementById("sleepingCat");
    catImage.remove();
}

function startRide() {
    var start = document.getElementById("start");
    var startButton = document.getElementById("startButton");
    if (startButton) {
        startButton.remove();
    }
    if (start) {
        start.remove();
    }
}

 
function startRain() {
    if (!isRaining) {
        var rainGif = document.createElement('div');
        rainGif.setAttribute('id', 'rainG');
        document.getElementById('window').appendChild(rainGif);
        createOverlay(false);
        isRaining = true;
    }
    else {
        document.getElementById('rainG').remove();
        isRaining = false;
        createOverlay(true);
    }
}

function createOverlay(isOverlay) {
    if (!isOverlay) {
        var newOverlay = document.createElement("div");
        newOverlay.setAttribute("id", "overlay");
        document.getElementById("train").appendChild(newOverlay);
    } else {
        var overlay = document.getElementById("overlay");
        overlay.remove();
    }
}

