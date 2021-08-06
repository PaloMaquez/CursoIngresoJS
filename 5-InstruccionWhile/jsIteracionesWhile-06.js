/*
Maquez, Paloma Lara
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;//Son variables que tienen que tener ciertas reglas, se utilizan siempre inicializados
	var acumulador;//Son variables que tienen que tener ciertas reglas, se utilizan siempre inicializados, la diferencia con el contador es que se suma con otra variable
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador < 5)
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador + numeroIngresado;
	}
	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN