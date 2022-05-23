
let numeroCuadrados = 6;
let colors = [];
let colorsRandom = "";
let pickedColor = colors[3];

function iniciarElJuegoMomentaneamente() {

    function asignarColoresTarjetas() {
        var redColor = Math.floor(Math.random() * 255);
        var greenColor = Math.floor(Math.random() * 255);
        var blueColor = Math.floor(Math.random() * 255);

        return "rgb(" + redColor + ", " + greenColor + ", " + blueColor + ")"
    }

    const squares = document.querySelectorAll(".square");
    for (let i = 0; i < numeroCuadrados; i++) {
        const resutaldoDelColor = asignarColoresTarjetas()
        squares[i].style.backgroundColor = resutaldoDelColor;
        colors.push(squares[i].style.backgroundColor);
    }


    colorsRandom = colors[Math.floor(Math.random() * numeroCuadrados)];
    document.getElementById("aggColorRGB").innerHTML = colorsRandom;
    // console.log(colorsRandom);

    function detectarClick(squareTal) {
        squareTal.addEventListener("click", function () {
            var colorRecibido = squareTal.style.backgroundColor

            if (colorRecibido === colorsRandom) {
                console.log("Si");
                message.textContent = "Correcto";
                changeColors(colorRecibido)

            } else {
                console.log("No");
                this.style.background = "#232323"
                message.textContent = "Inténtalo nuevamente";
            }
        })
    }

    function changeColors(color) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.background = color
            document.getElementById("cambiarAquiCuandoGano").style.backgroundColor = color;
            document.getElementById("miBotonCheto").style.backgroundColor = color;

        }
    }

    function recogerDiv() {
        for (var i = 0; i < squares.length; i++) {
            var squareTal = squares[i];
            detectarClick(squareTal)
        }
    }

    recogerDiv()

}


iniciarElJuegoMomentaneamente()

function reiniciar() {
    location.reload()
}

function easyGame() {
    numeroCuadrados = 3;
    document.getElementById("del01").style.visibility = "hidden";
    document.getElementById("del02").style.visibility = "hidden";
    document.getElementById("del03").style.visibility = "hidden";
    colorsRandom = colors[Math.floor(Math.random() * 3)];
    document.getElementById("aggColorRGB").innerHTML = colorsRandom;
    console.log(colorsRandom);

}

function hardGame() {

    reiniciar()

}
