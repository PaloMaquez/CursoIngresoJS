/*
Maquez, Paloma Lara
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero=prompt("Ingrese un número entre 0 y 9");
	numero=parseInt(numero);
	while(numero>10 || numero<0)
	{
		numero=prompt("Ingrese un número entre 0 y 9");
		numero=parseInt(numero);
	}
	document.getElementById('txtIdNumero').value=numero;

}