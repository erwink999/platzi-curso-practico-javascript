// codigo del cuadrado

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm.");

function perimetroCuadrado(lado) {
    return lado * 4 + " cm";
}
//console.log("El perimetro del cuadro es: " + perimetroCuadrado + "cm.");

//const areaCudrada = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado + " cm2";
}

//console.log("El area cuadrado del cuadro es: " + ladoCuadrado + "cm2.");

// codigo del triangulo

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
   // "Los lados del triangulo miden: " 
   // + ladoTriangulo1
   // + "cm, " 
   // + ladoTriangulo2 
   // + "cm, " 
   // + baseTriangulo 
   // + "cm."
   //
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cm.");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo + " cm"
}

//console.log("El perimetro de el triangulo es: " + perimetroTriangulo + "cm.");


function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2 + "cm2";
}
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area de el triangulo es: " + areaTriangulo + "cm2");


//codigo del circulo
console.group("Circulos");

// Radio
//const radioCirculo = 4;
//console.log("EL radio de el circulo es: " + radioCirculo + "cm" );
//function radioCirculo() {
    //return  radioCirculo;
//}

// Diametro

function diametroCirculo(radioCirculo) {
    return radioCirculo * 2 + " cm";
};
//const diametroCirculo = radioCirculo * 2;
//console.log("EL diametro de el circulo es: " + diametroCirculo + "cm" );

// PI
//const PI = Math.PI;
//console.log("El PI es: "+ PI);

// Circunferencia



//const perimetroCiculo = diametroCirculo * PI;
//console.log("El perimetro del circulo es: " + perimetroCiculo + " cm");

//Area

function AreaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * Math.PI + " cm2";
}
//const areaCirculo = (radioCirculo* radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + " cm2");


// Aqui vamos a interactuar con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

// Ejemplo de triangulo Isosceles

function alturaTriangulo(ladoA, ladoB, ladoBase) {

    
}