var isDay = true;
var isCat = false;
var isRaining = false;
var isBird = false;


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
        if (isRaining) {
            startRain();
            var music = document.getElementById("rain");
            music.pause();
        }
        if(!isBird) {
            placeBird();
        } else if (isBird) {
            deleteBird();
        }
    }
    else if (!changeToDay && isDay) {
        if (isDay) {
            isDay = false;
            var music = document.getElementById("Sun");
            music.pause();
        }
        if (isBird) {
            deleteBird();
        }
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
        createClouds();
        isRaining = true;
    }
    else {
        document.getElementById('rainG').remove();
        createClouds();
        createOverlay(true);
        isRaining = false;
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

function createClouds() {
    if (!isRaining) {
        var newClouds = document.createElement("div");
        newClouds.setAttribute("id", "rainClouds");
        document.getElementById("train").appendChild(newClouds);
    }
    else {
        var oldClouds = document.getElementById("rainClouds");
        oldClouds.remove();
    }
}

function placeBird() {
    isBird = true;
    var newBird = document.createElement("div");
    newBird.setAttribute("id", "bird");
    document.getElementById("train").appendChild(newBird);
}

function deleteBird() {
    var newBird = document.getElementById("bird");
    if (newBird) {
        newBird.remove();
        isBird = false;
    }
}