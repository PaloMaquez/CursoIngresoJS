/*
Maquez, Paloma Lara
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");
	sexoIngresado = parseInt(sexoIngresado);
	
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("Ingrese  f ó m .");
	}
	document.getElementById('txtIdSexo').value=sexoIngresado;
}