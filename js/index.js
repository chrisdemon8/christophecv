function showNavMobile() {

    console.log('navigation mobile');
}

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

window.addEventListener('click', function(e) {
    if (!document.getElementById('navButton').contains(e.target))
        if (!document.getElementById('mySidebar').contains(e.target)) {
            closeNav();
        }
});


window.onscroll = function() { navFunction() };

// Get the navbar
var navbar = document.getElementById("navDetect");


var navbarMobile = document.getElementById("pp");
var imgResize = document.getElementById("resize");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var stickyMobile = navbarMobile.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navFunction() {

    navbarMobile.classList.remove("sticky");
    navbar.classList.remove("sticky");

    if (window.matchMedia("(min-width: 600px)").matches) {
        imgResize.style.width = "150px";
        imgResize.style.height = "150px";
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    } else {

        if (window.pageYOffset > stickyMobile) {
            imgResize.style.width = "40px";
            imgResize.style.height = "40px";
            navbarMobile.classList.add("sticky");
        } else {
            imgResize.style.width = "150px";
            imgResize.style.height = "150px";
            navbarMobile.classList.remove("sticky");
        }

    }




}

function sendEmail() {
    window.location = "mailto:christophepetre57@gmail.com";
}