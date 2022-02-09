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