/*
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{

	let numeroRecorrido;
	let numeroAnterior;
	let numeroIngresado;

	numeroRecorrido=100;
	numeroIngresado=100;
	for(numeroRecorrido=0;numeroRecorrido<numeroIngresado;numeroRecorrido++)
	{
		for(numeroAnterior=2;numeroAnterior<numeroRecorrido;numeroAnterior++)
		{
			if(numeroRecorrido%numeroAnterior)
			{
				break;
			}
		}
		if(numeroAnterior==numeroRecorrido)
		{
			console.log("el"+numeroRecorrido+" es primo");
		}
	}

















	// for(numeroAnterior=2;numeroAnterior<numeroRecorrido;numeroAnterior++)
	// {
	// 	if(numeroRecorrido%numeroAnterior==0);
	// 	{
	// 		// console.log(numeroAnterior+" es divisor de "+numeroRecorrido);
	// 		break;
	// 	}
	// 	// if(numeroAnterior%2==0)
	// 	// {
	// 	// 	console.log(numeroAnterior+ "es par");
	// 	// }
	// }
	// if(numeroAnterior!=numeroRecorrido)
	// {
	// 	console.log(numeroRecorrido+" no es primo");
	// }
	// else
	// {
	// 	console.log(numeroRecorrido+" es primo");
	// }


}//FIN DE LA FUNCIÓN