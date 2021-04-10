var isDay = true;
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
    startRain(false);
    var overlayGrad = document.getElementById('overlay');
    if (changeToDay) {
        overlayGrad.style.opacity = "0.0";
        isDay = true;
    }
    else if (!changeToDay && isDay) {
        overlayGrad.style.opacity = "0.5";
        //var t = setInterval(changeOverlay,200, 0.05, overlayGrad);
        isDay = false;
    }
    else if (!changeToDay && !isDay) {
        overlayGrad.style.opacity = "0.0";
        isDay = true;
    }
}

function changeOverlay(num, element) {
    var opacity = element.style.opacity;
    if (opacity == 0.7) {
        clearInterval(t);
        alert("a");
    }
    else {
        element.style.opacity += num;
    }
}

window.onload = function() {
    document.getElementById('overlay').style.opacity = "0.0";
}

function startRain(isRaining) {
    if (!isRaining) {
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'rain');
        document.getElementById("train").appendChild(newDiv);
    }
}