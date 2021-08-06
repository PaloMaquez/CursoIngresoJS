/*Al ingresar una edad que sea igual a 15,
 mostrar el mensaje "niña bonita". */
function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad==15)
	{ 
		alert("niña bonita");
    }
}