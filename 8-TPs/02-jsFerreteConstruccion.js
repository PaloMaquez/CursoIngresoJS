/* Maquez, Paloma Lara.
2.	Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular 
y se debe alambra con tres hilos de alambre.
B. mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y
se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.*/

function Rectangulo () 
{
    let largoTerreno;
    let anchoTerreno;
    let cantidadAlambre;
    let cantidadVueltas;
    let mensajeSalida;

    largoTerreno = document.getElementById('txtIdLargo').value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = document.getElementById('txtIdAncho').value;
    anchoTerreno = parseInt(anchoTerreno);

    cantidadAlambre = (largoTerreno + anchoTerreno) * 2;

    cantidadVueltas = cantidadAlambre * 3;

    mensajeSalida = "La cantidad de alambre necesaria es: "+cantidadVueltas+ " metros."

    alert(mensajeSalida);

}

function Circulo () 
{
	let radioTerreno;
    let circunferencia;
    let cantidadAlambre;
    let mensajeSalida;

    radioTerreno = document.getElementById('txtIdRadio').value;
    radioTerreno = parseInt(radioTerreno);

    circunferencia = (Math.PI * 2) * radioTerreno;

    cantidadAlambre = circunferencia * 3

    mensajeSalida = "La cantidad de alambre necesaria es de: "+cantidadAlambre;

    alert(mensajeSalida);

}

function Materiales () 
{
	let largoTerreno;
    let anchoTerreno;
    let cantidadCemento;
    let cantidadCal;
    let mensajeSalida;

    largoTerreno = document.getElementById('txtIdLargo').value;
    largoTerreno = parseInt(largoTerreno);

    anchoTerreno = document.getElementById('txtIdAncho').value;
    anchoTerreno = parseInt(anchoTerreno);

    cantidadCemento = (largoTerreno * anchoTerreno) * 2;

    cantidadCal = (largoTerreno * anchoTerreno) * 3;

    mensajeSalida = "La cantidad de cemento necesaria es de: "+cantidadCemento+ " y la cantidad de cal es: "+cantidadCal;

    alert(mensajeSalida);
}
    