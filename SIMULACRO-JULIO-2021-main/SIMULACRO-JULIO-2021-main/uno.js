/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
-Tipo: (validar "HDD", "SSD" o "SSDM2")
-Precio: (validar entre 5000 y 18000),
-Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
-Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
-Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades disponibles. 
c) Cuántas unidades de HDD hay en total.*/

function mostrar()
{
   let productos;
   let precio;
   let cantidadUnidades;
   let marca;
   let capacidad;


   while(productos > 5)
   {
      productos=prompt("Ingrese productos");
      while(productos!="HDD" && productos!="SSD" && productos!="SSDM2")
      {
         productos=promp("Error, ingrese productos validos")
      }
      precio=prompt("Ingrese precio");
      precio=parseInt(precio);
      while(precio<500 || precio >18000)
      {
         precio=promp("Error, ingrese precio valido");
         precio=parseInt(precio);
      }
      cantidadUnidades=promp("Ingrese cantidad requerida");
      cantidadUnidades=parseInt(cantidadUnidades);
      while(cantidadUnidades < 1 || cantidadUnidades > 50)
      {
         cantidadUnidades=prompt("Error, ingrese una cantidad valida");
         cantidadUnidades=parseInt(cantidadUnidades);
      }
      marca=promp("Ingrese la marca deseada");
      while(marca!="Seagate" && marca!="Western Digital" && marca!="Kingston")
      {
         marca=prompt("Error, ingrese una marca valida");
      }
      capacidad=prompt("Ingrese la capacidad que necesita");
      while(capacidad!="250Gb" && capacidad!="500Gb" && capacidad!="1Tb"  && capacidad!="2Tb" )
      {
         capacidad=prompt("Error, ingrese una capacidad valida");
      }
   }
}





















/*
	let productos;
   let precio;
   let cantidad;
   let marca;
   let capacidad;
   let ssddMasBarato;
   let ssddCantidadUnidades;
   let ssddMarca;

   productos=0;
   ssddMasBarato=0;

   while(productos < 5)
   {
      productos=prompt("Ingrese los productos");
      while(productos!="HDD" && productos!="SSD" && productos!="SSDM2")
      {
         productos=prompt("Error, ingrese un producto valido");
      }
      precio=prompt("Ingrese precio");
      precio=parseInt(precio);
      while(precio < 5000 || precio > 18000)
      {
         precio=prompt("Error, ingrese un precio valido");
         precio=parseInt(precio);
      }
      cantidad=prompt("Ingrese la cantidad de unidades");
      cantidad=parseInt(cantidad);
      while(cantidad<0 || cantidad > 50)
      {
         cantidad=prompt("Error, ingrese una cantidad valida");
         cantidad=parseInt(cantidad);
      }
      marca=prompt("Ingrese la marca del producto");
      while(marca!="Seagate" && marca!="Western Digital" &&  marca!="Kingston")
      {
         marca=prompt("Error, ingrese una marca valida")
      }

      capacidad=prompt("Ingrese la capacidad que necesita");
      while(capacidad!="250Gb" && capacidad!="500Gb" && capacidad!="1Tb" && capacidad!="2Tb")
      {
         capacidad=prompt("Error, ingrese una capacidad valida");
      }
   }
*/