/* Maquez, Paloma Lara.
1. Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let sumaProductos;
    let mensajeSalida;
    
    productoUno=document.getElementById('txtIdPrecioUno').value;
    productoUno=parseInt(productoUno);

    productoDos=document.getElementById('txtIdPrecioDos').value;
    productoDos=parseInt(productoDos);

    productoTres=document.getElementById('txtIdPrecioTres').value;
    productoTres=parseInt(productoTres);

    sumaProductos= productoUno + productoDos + productoTres;

    mensajeSalida="La suma del precio de los productos es de: $"+sumaProductos;

    alert(mensajeSalida);

}

function Promedio () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let sumaProductos;
    let promedio;
    let mensajeSalida;

    productoUno=document.getElementById('txtIdPrecioUno').value;
    productoUno=parseInt(productoUno);

    productoDos=document.getElementById('txtIdPrecioDos').value;
    productoDos=parseInt(productoDos);

    productoTres=document.getElementById('txtIdPrecioTres').value;
    productoTres=parseInt(productoTres);

    sumaProductos = productoUno + productoDos + productoTres;

    promedio= sumaProductos / 3;

    mensajeSalida="El promedio de los tres productos es de: $"+promedio;

    alert(mensajeSalida);
}

function PrecioFinal () 
{
	let productoUno;
    let productoDos;
    let productoTres;
    let porcentaje;
    let sumaProductos;
    let precioFinal;
    let mensajeSalida;

    productoUno = document.getElementById('txtIdPrecioUno').value;
    productoUno = parseInt(productoUno);

    productoDos = document.getElementById('txtIdPrecioDos').value;
    productoDos = parseInt(productoDos);

    productoTres = document.getElementById('txtIdPrecioTres').value;
    productoTres = parseInt(productoTres);

    sumaProductos = productoUno +  productoDos + productoTres;

    porcentaje = sumaProductos *  21/100 ;

    precioFinal = sumaProductos + porcentaje;

    mensajeSalida="El precio final (más IVA 21%) es de: $"+precioFinal;

    alert(mensajeSalida);
}