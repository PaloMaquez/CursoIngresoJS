/*
Maquez, Paloma Lara
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre
	let mensajeSalida

	nombre = prompt("Ingresa tu nombre", "Escriba aqui");

	mensajeSalida = "Su nombre es: " + nombre;

	alert(mensajeSalida);
}
