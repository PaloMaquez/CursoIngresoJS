/*
Maquez, Paloma Lara
7 -Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */
function mostrar()
{	
	let edad;
	let estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<19 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
}