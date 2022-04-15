//calculadora de pension
//p = pension total
//ph= pension por hijo
//h= hijos
//s= salario neto
//si h=1 entonces p=s*0.25
//si h=2 entonces p=s*0.35
//si h=3 entonces p=s*0.50
//si h=2 entonces ph=p/2
//si h=3 o más entonces ph=p/h
var p = 0;
var ph = 0;
var h = document.getElementById("h");
var s = document.getElementById("s");
function calculo() {
    if (h.value == 1) {
        p = s.value * 0.25;
        ph = p;
        document.getElementById("p").value = p;
        document.getElementById("ph").value = ph;
    }
    if (h.value == 2) {
        p = s.value * 0.35;
        ph = p / 2;
        document.getElementById("p").value = p;
        document.getElementById("ph").value = ph;
    }
    if (h.value == 3) {
        p = s.value * 0.50;
        ph = p / 3;
        document.getElementById("p").value = p;
        document.getElementById("ph").value = ph;
    }
    if (h.value > 3) {
        p = s.value * 0.50;
        ph = p / h.value;
        document.getElementById("p").value = p;
        document.getElementById("ph").value = ph;
    }
}