var interval;
var timeout;

// 1. Navbar changes color on scroll

window.addEventListener("scroll", function () {

    var navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// 2. setInterval

function myTimer() {

    var d = new Date();

    document.getElementById("demo").innerHTML = d;

}

function startTimer() {

    if (interval == null) {
        interval = setInterval(myTimer, 1000);
    }

}

function stopTimer() {

    clearInterval(interval);

    interval = null;

}


// 3. setTimeout

function gataData() {

    Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true
    });

}

function startTimeout() {

    timeout = setTimeout(gataData, 3000);

}

function stopTimeout() {

    clearTimeout(timeout);

}


