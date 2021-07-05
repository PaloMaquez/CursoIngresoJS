/*
Maquez, Paloma Lara.
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	let mensajeSalida

	nombreIngresado=document.getElementById('txtIdNombre').value;

	mensajeSalida= "Su nombre es: "+ nombreIngresado;

	alert(mensajeSalida);
}




	// nombreIngresado=txtIdNombre.value; otra manera de hacerlo

//document(el documento html).getElementById ('nombre de ID").value
