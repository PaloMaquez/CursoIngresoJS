/*
Maquez; Paloma Lara
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let edad;
	let mensaje;

	nombre=document.getElementById('txtIdNombre').value;

	edad=document.getElementById('txtIdEdad').value;

	mensaje="Usted se llama "+nombre+" y tiene "+edad+ " años";

	alert(mensaje);
}






// otra manera
// mensaje="Usted se llama";
// mensaje=mensaje +nombre;
// mensaje=mensaje +" y tiene";
// mensaje= mensaje +edad;
// mensaje=mensaje + "años";8