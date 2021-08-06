/*
Maquez, Paloma Lara
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado;

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;		
	}
}