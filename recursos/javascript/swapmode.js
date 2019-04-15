function swapMode() {
    var navegador = document.getElementById("myTopnav");
    if (navegador.className === "topnav") {
    navegador.className += " responsive";
    } else {
    navegador.className = "topnav";
    }
}