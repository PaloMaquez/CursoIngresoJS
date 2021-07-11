/*Al ingresar una edad solo debemos informar si la persona NO es adolescente. */
function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if (edad<13){
		alert("No es adolescente");
	}
	if (edad>18){
		alert("No es adolescente");
	}
	//tomo la edad  
	

}//FIN DE LA FUNCIÓN