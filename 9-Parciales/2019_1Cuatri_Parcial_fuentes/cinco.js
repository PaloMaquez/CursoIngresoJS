/*
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
 */

function mostrar()
{
    var destinoIngresado;
    var medioDePago;
    var cantidadDias;
    var precio;
    var descuento;
    let mensaje;

    destinoIngresado = document.getElementById('Marca').value;

    cantidadDias = prompt("Ingrese la cantidad de días que desea viajar: ");
    cantidadDias = parseInt(cantidadDias);

    medioDePago = prompt("Ingrese un medio de pago: " , "Efectivo, MercadoPago, Debito, Crédito.");

    switch(destinoIngresado)
    {
        case "America":
            descuento = 50;
            switch(medioDePago)
            {
                case "Débito":
                    descuento = descuento + 10;
                    break;
            }
            break;
        case "Africa":
            descuento = 60;
            switch(medioDePago)
            {
                case "Efectivo":

                case "MercadoPago":
                    descuento = descuento + 15;
                    break;
            }
            break;
        case "Europa":
            descuento = 20;
            switch(medioDePago)
            {
                case "Debito":
                    descuento = descuento + 15;
                    break;

                case "MercadoPago":
                    descuento = descuento + 10;
                    break;

                default:
                    descuento = descuento + 5;
                    break;
            }
            break;

        default:
            descuento = -20;
            break;
    }

    precio = cantidadDias * 100;

    precio = precio - precio * (descuento / 100);

    mensaje="El precio total de su viaje es de $"+precio;

    alert(mensaje);
}

