/* 
Maquez, Paloma Lara
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	
	let mensaje;
	
	nombre = prompt("Ingresa tu nombre", "Paloma Maquez");
    
	mensaje="Su nombre es: "+nombre;

	document.getElementById('txtIdNombre').value=mensaje;
}

