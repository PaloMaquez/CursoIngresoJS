/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/
function mostrar()
{
    let numeroIngresado;
    let letraIngresada;
    let respuesta;
    let cantidadPares;
    let cantidadImpares;
    let cantidadCeros;
    let promedioPositivos;
    let sumaNegativos;

    respuesta='si';
    cantidadPares=0;
    cantidadImpares=0;
    cantidadCeros=0;
    promedioPositivos=0;
    sumaNegativos=0;

    while(respuesta=='si')
    {
        numeroIngresado=prompt("Ingrese un numero");
        numeroIngresado=parseInt(numeroIngresado);
        letraIngresada=prompt("Ingrese una letra");
        respuesta=prompt("Desea continuar? si/no");
        while(numeroIngresado<-100 || numeroIngresado>100 || isNaN(numeroIngresado)==true)
        {
            numeroIngresado=prompt("Error, ingrese un numero valido");
            numeroIngresado=parseInt(numeroIngresado);
            if(numeroIngresado==0)
            {
                cantidadCeros=cantidadCeros+1;
            }
            if(numeroIngresado=o)
            {
                
            }
        }
    }
    document.write("Cantidad de ceros: " + cantidadCeros + "<br>");
    


}
