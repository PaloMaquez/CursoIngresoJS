/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let numeroIngresado;

	contador=0;
	acumulador=0;
	sumaPositivos=0;
	multiplicacionNegativos=0;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		respuesta=prompt("Si desea seguir ingresando numeros escriba 'si'");
		if(numeroIngresado>0)
		{
			acumulador=acumulador+numeroIngresado;
			sumaPositivos=acumulador;
		}
		if(numeroIngresado<0)
		{
			acumulador=acumulador*numeroIngresado;
			multiplicacionNegativos=acumulador;
		}
	}
	
	document.getElementById('txtIdSuma').value=sumaPositivos;
	document.getElementById('txtIdProducto').value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN