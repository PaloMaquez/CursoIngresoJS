/*
Maquez, Paloma Lara
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese la clave");

	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("Error, intente de nuevo");
	}
	alert("Bienvenido");
}//FIN DE LA FUNCIÓN
