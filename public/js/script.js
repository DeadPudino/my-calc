const operadorCheck = ["/", "*", "-", "+", "^"];

function insert(num) {
    
    let display = document.getElementById("display");
    let displayOculto = document.getElementById("displayOculto");

    if (operadorCheck.includes(num)) {

        if (operadorCheck.includes(display.value[display.value.length-1])) {

            return false;

        } else if (num == "^") {

            display.value += "^";
            displayOculto.value += "**";

        } else {

            display.value += num;
            displayOculto.value += num;

        }
            
    } else {

        display.value += num;
        displayOculto.value += num;
        
    }

}

function resultado() {
    let display = document.getElementById("displayOculto").value;
    if (display) {
        document.getElementById("display").value = eval(display);
        document.getElementById("displayOculto").value = eval(display);
    }
}

function deletaUm() {
    let display = document.getElementById("display").value;
    let displayOculto = document.getElementById("displayOculto").value;

    if (displayOculto[displayOculto.length-2] == "*" && displayOculto[displayOculto.length-1] == "*") {

        document.getElementById("displayOculto").value = displayOculto.slice(0, -2); // remove a potência do display oculto
        document.getElementById("display").value = display.slice(0, -1); // remove o caractere "^" do display

    // } else if (displayOculto[displayOculto.length-2] == "t" && displayOculto[displayOculto.length-1] == "(") {

    //     document.getElementById("displayOculto").value = displayOculto.slice(0, -10); // aqui remove o texto "Math.sqrt(" do display oculto
    //     document.getElementById("display").value = display.slice(0, -1); // aqui remove o caractere "√" do display

    } else {
        // remove o último caractere dos dois displays
        document.getElementById("displayOculto").value = displayOculto.slice(0, -1);
        document.getElementById("display").value = display.slice(0, -1);
    }
}


function deletaTudo() {
    document.getElementById("display").value = "";
    document.getElementById("displayOculto").value = "";
}

function raiz() {
    let display = document.getElementById("display"); 
    let displayOculto = document.getElementById("displayOculto");
    let raiz = Math.sqrt(displayOculto.value);
    display.value = raiz;
    displayOculto.value = raiz;

}

// function raiz(formula) {
//     document.getElementById("display").value = document.getElementById("display").value + formula;
//     document.getElementById("displayOculto").value = document.getElementById("displayOculto").value + formula;
// }
