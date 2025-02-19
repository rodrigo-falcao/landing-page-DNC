var Leonardo = window.document.getElementById("leonardo");
var Samanta = window.document.getElementById("samanta");
var Bruna = window.document.getElementById("bruna");
var ArrowLeft = window.document.getElementById("arrowLeft");
var ArrowRight = window.document.getElementById("arrowRight")

function ScrollRight(){
    Leonardo.style = "display:none"
    ArrowRight.style = "display:none"
    Bruna.style = "display:flex"
    ArrowLeft.style = "display:flex"
}

function ScrollLeft() {
    Leonardo.style = "display:flex"
    ArrowRight.style = "display:flex"
    Bruna.style = "display:none"
    ArrowLeft.style = "display:none"
}

