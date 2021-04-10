var isDay = true;
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
        overlayGrad.style.opacity = "0.0";
        isDay = true;
        isRaining = false;
        //document.getElementById("Rain").pause();
        stop();
    }
    else if (!changeToDay && isDay) {
        overlayGrad.style.opacity = "0.5";
        //var t = setInterval(changeOverlay,200, 0.05, overlayGrad);
        isDay = false;
        isRaining = true;
        //document.getElementById("Sun").pause();
        startRain(false);
        //setTimeout(function(){startRain(false);},1000);
        //setTimeout(function(){startRain(false);},2000);
    }
    else if (!changeToDay && !isDay) {
        overlayGrad.style.opacity = "0.0";
        isDay = true;
        isRaining = false;
        //document.getElementById("Sun").pause();
        startRain(false);
        stopRain();
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

window.onload = function () {
    document.getElementById('overlay').style.opacity = "0.0";
}

function startRain(isRaining) {
    if (!isRaining) {
        isRaining = true;
        var count = 0;

        while (count < 50) {
            var newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'rain');
            let randLeft = Math.random() * (1500 - 300) + 300;
            let randTop = Math.random() * (100 - (-400)) - 400;

            let root = getComputedStyle(document.querySelector(':root'));
            let tempTop = root.getPropertyValue('--top');
            tempTop = randTop;
            newDiv.style.top = tempTop + "px";
            newDiv.style.left = randLeft + "px";
            
            let newRoot = document.documentElement;
            let result = tempTop + 80;
            root.style.setAttribute('--finalTop', result + "%");
            console.
            
            

            document.getElementById("window").appendChild(newDiv);
            count++;
        }
    }
}

function stopRain() {
    var x = document.getElementsByClassName("rain");
    while (x[0]) {
        x[0].parentNode.removeChild(x[0]);
    }
}
