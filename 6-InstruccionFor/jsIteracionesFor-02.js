/*
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
*/
function mostrar()
{
	let contador;

	contador=0;

	for(contador=0;contador<50;contador++)
	{
		if(contador==25)
		{
			continue;
		}
		console.log(contador);
	}
	console.log(contador);
}