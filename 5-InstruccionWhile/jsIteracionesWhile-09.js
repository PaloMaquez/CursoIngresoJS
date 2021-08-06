/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	let contador;

	contador=0;
	banderaDelPrimero=0;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		if(banderaDelPrimero==0)
		{
			banderaDelPrimero=1;
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			
		}
		else
		{
			if(numeroMaximo > numeroIngresado)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroMinimo < numeroIngresado)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("Ingrese 'Si' si desea agregar mas numeros")
	}
	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;
}