/*
Maquez, Paloma Lara
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contadorDeVueltas;

	contadorDeVueltas=0;//1

	while(contadorDeVueltas<10)//2
	{
		contadorDeVueltas=contadorDeVueltas+1;//3
		console.log(contadorDeVueltas);
	}
	console.log("El valor final del contador: "+contadorDeVueltas);
}
/*
Tres puntos a tener en cuenta:
1-Inicio de variable de la logica
2-logica correcta
3-modificacion de la logica (siempre va dentro del while)
Ejemplo:

	let password;

	password=prompt("Ingrese clave");//1
	while(password!="holaMundo")//2
	{
		password=prompt("Error, reingrese clave");//3
	}
	alert("Bienvenido");
*/