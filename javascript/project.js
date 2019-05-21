// Toggle Menu visibility
function navigationToggle() {
    var element = document.getElementById("mainNavigation");
    if (element.className === "responsive") {
        element.className = "mainNavigationList";
    } else {
        element.className = "responsive";
    }
}

// Hide Menu when clicked away
window.onload = function () {
    var mainNav = document.getElementById("mainNavigation");
    document.onclick = function (e) {
        if (e.target.id !== "navIcon") {
            mainNav.className = "mainNavigationList";
        }
    };
};
