//*****************kang**************************
document.onreadystatechange = function() {
    if (document.readyState == "complete") {
        loadingFade();
    }
};

function loadingFade() {
    var opacity = 1;
    var loadingPage = document.getElementById("loading");
    var loadingBackground = document.getElementById("loading_bg");
    var body = document.getElementsByTagName("body")[0];
    var nav=body.querySelector('.page').querySelector('nav')
    var time = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(time);
            loadingPage.remove();
            body.classList.remove("loading");
            nav.classList.remove("loading");
        }

        loadingBackground.style.opacity = opacity;
        opacity -= 0.05;
    }, 100);
}

//***********************************************