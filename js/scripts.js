function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }
function goToContact() {
    document.getElementById("btn-contact").onclick;
    window.location.href = "../pages/contact.html";
}
function contactFromHome() {
    document.getElementById("btn-contact").onclick;
    window.location.href = "pages/contact.html";
}