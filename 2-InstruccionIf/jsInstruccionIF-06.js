/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años). */
function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>17){
		alert("Mayor de edad");
	}
	if(edad>12 && edad<18){
		alert("Adolescente");
	}
	if (edad<13){
		alert("Menor de edad");
	}
	//tomo la edad  
	
}//FIN DE LA FUNCIÓN