/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
function CalcularPrecio () 
{
    let cantidadLamparas;
    let marcaLamparas;
    let precioDescuento;
    let precioBase;
    let precioBruto;
    let porcentaje;
    let ingresosBrutos ;
    let mensajeSalida;
    let precioConImpuestos;

    cantidadLamparas=document.getElementById('txtIdCantidad').value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marcaLamparas=document.getElementById('Marca').value;

    precioBase = 35;

    precioBruto=cantidadLamparas * precioBase;

    porcentaje = 0;

    if(cantidadLamparas>5)//A
    {
        porcentaje=50;
    }
    else
    {
        if(cantidadLamparas==5)//B
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                porcentaje=40;
            }
            else
            {
                porcentaje=30;
            }
        }
        else
        {
            if(cantidadLamparas==4)//C
            {
                if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
                {
                    porcentaje=25;
                }
                else
                {
                    porcentaje=20;
                }
            }
            else
            {
                if(cantidadLamparas==3)//D
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        porcentaje=15;
                    }
                    else
                    {
                        if(marcaLamparas=="FelipeLamparas")
                        {
                            porcentaje=10;
                        }
                        else
                        {
                            porcentaje=5;
                        }
                    }
                }
            }
        }
        
    }   
    precioDescuento=precioBruto * porcentaje/100;
    document.getElementById('txtIdprecioDescuento').value=precioDescuento;


    mensajeSalida= "Usted pago " + ingresosBrutos +" de ingresos brutos";
    if(precioDescuento>120)
    {
        precioConImpuestos = precioDescuento + (precioDescuento * iIBB / 100);
		alert (mensajeSalida); 
		document.getElementById('precioDescuento').value = precioConImpuestos;
    }  
}
