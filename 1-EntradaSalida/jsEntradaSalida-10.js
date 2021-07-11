/*
Maquez, Paloma Lara
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"

function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	descuento=importe * 25 / 100;

	resultado=importe-descuento;
	
	document.getElementById('txtIdResultado').value=resultado;	
}*/



/*
Maquez, Paloma Lara
10 BIS,
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del xx%
en el cuadro de texto "RESULTADO"
function mostrarAumento()
{
	let importe;
	let porcentaje;
	let descuento;
	let resultado;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentaje=prompt("Ingrese el Porcentaje de Descuento Requerido");

	descuento=importe*porcentaje/100;

	resultado=importe-descuento;

	document.getElementById('txtIdResultado').value=resultado;

}*/


	//resultado = importeIngresado - (importeIngresado * 25/100);
	//resultado = importeIngresado - (importeIngresado*0,25); OTRA FORMA
	//resultado = importeIngresado * 0,75;
	//resultado = importeIngresado * 1,25;




/*

Un programa por lo general siempre tiene ENTRADAS, PROCESOS Y SALIDAS

ENTRADA --> EL IMPORTE (POR ID)

PROCESO --> PRIMERO CALCULO EL DESCUENTO Y DESPUES APLICO EL DESCUENTO

SALIDA --> EL RESULTADO (POR ID)

PARA IR VIENDO SI FUNCIONAN LAS COSAS USAR ALERT 


*/