/*
Maquez, Paloma Lara.
05 - Al ingresar una edad solo debemos informar si la persona NO es adolescente. */
function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad<18 || edad>17)
	{
		alert("No es adolescente");
	}
}

	/*
	if (edad<13)
	{
		alert("No es adolescente");
	}                                      ESTO NO ESTA BIEN PORQUE SE REPITE EL ALERT Y NO SE PUEDE REPETIR NADA
	if (edad>17)
	{
		alert("No es adolescente");
	}*/

