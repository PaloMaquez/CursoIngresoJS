/*
Maquez, Paloma Lara
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var cantidadDeVueltas;

	cantidadDeVueltas = 10;
	cantidadDeVueltas = parseInt(cantidadDeVueltas);

	while (cantidadDeVueltas > 0)
	{
		alert(cantidadDeVueltas);
		cantidadDeVueltas = cantidadDeVueltas - 1;
	}
}