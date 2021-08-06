/*
Maquez, Paloma Lara.
Al ingresar una edad debemos informar si la persona es mayor de edad,
sino informar que es un menor de edad. 
*/
function mostrar()
{
	let edad;
	
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Mayor de edad");
	}
	else
	{
		alert("Menor de edad");
	}
}

/*SI LO TENGO QUE HACER SIN ELSE HAGO:

function mostrar()
{
	let edad;
	
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		if (edad<18)
		{
			alert("Mayor de edad");
		}
	}
}

*/