/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	let productos;
	let contadorDeProductos;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let alcoholMasBarato;
	let alcoholMasBaratoUnidades;
	let alcoholMasBaratoFabricante;
	let alcoholMasBaratoPrimero;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let contadorDeBarbijos;
	let contadorDeAlcohol;
	let contadorDeJabon;
	let promedioCompra;

	contadorDeProductos=0;
	alcoholMasBaratoPrimero=0;
	productoConMasUnidadesPrimero=0;
	acumuladorBarbijo=0;
	acumuladorAlcohol=0;
	acumuladorJabon=0;
	contadorDeBarbijos=0;
	contadorDeAlcohol=0;
	contadorDeJabon=0;

	while(contadorDeProductos<5)
	{
		productos=prompt("Ingrese los productos que requiere");
		while(productos!= "barbijo" && productos!="jabon" && productos!="alcohol"||isNaN(productos)==false)
		{
			productos=prompt("Error, ingrese los productos que requiere");
		}

		precio=prompt("Ingrese el precio");
		precio=parseInt(precio);
		while(precio < 100 || precio > 300 || isNaN(precio)==true)
		{
			precio=prompt("Error, ingrese un precio valido");
			precio=parseInt(precio);
		}
		cantidad=prompt("Ingrese cantidad de unidades:")
		cantidad=parseInt(cantidad);
		while(cantidad < 0 || cantidad > 1000 || isNaN(cantidad)==true)
		{
			cantidad=prompt("Error, ingrese una cantidad valida:");
			cantidad=parseInt(cantidad);
		}

		marca=prompt("Ingrese la marca del producto:");
		fabricante=prompt("Ingrese al fabricante del producto:");
	}
	if(productos=='alcohol')//A
	{
		if(alcoholMasBaratoPrimero = 0)
		{
			alcoholMasBaratoPrimero = 1;
			alcoholMasBarato = precio;
			alcoholMasBaratoUnidades = cantidad;
			alcoholMasBaratoFabricante = fabricante;
		}
		else
		{
			if(alcoholMasBarato > precio)
			{
				alcoholMasBarato=precio;
				alcoholMasBaratoUnidades = cantidad;
				alcoholMasBaratoFabricante = fabricante;
			}
		}
	}
	switch(productos)//B
	{
		case "barbijo":
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			contadorDeBarbijos = contadorDeBarbijos + 1;
			break;
		case "alcohol":
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			contadorDeAlcohol = contadorDeAlcohol + 1;	
			break;
		case "jabon":
			acumuladorJabon = acumuladorJabon + cantidad;
			contadorDeJabon = contadorDeJabon + 1;
			break;
	}
	contadorDeProductos = contadorDeProductos +1;

	if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
	{
		promedioCompra = acumuladorJabon / contadorDeJabon;
	}
	else
	{
		if (acumuladorAlcohol > acumuladorBarbijo)
		{
			promedioCompra = acumuladorAlcohol / contadorDeAlcohol;
		}
		else
		{
			promedioCompra = acumuladorBarbijo / contadorDeBarbijos;
		}
	}

	document.write("A- ")

}
