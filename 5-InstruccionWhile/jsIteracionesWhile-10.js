/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
    let numeroIngresado;
    let contador;
    let acumulador;
    let sumaNegativos;
    let sumaPositivos;
    let cantidadPositivos;
    let cantidadNegativos;
    let cantidadCeros;
    let cantidadNumerosPares;
    let promedioPositivos;
    let promedioNegativos;
    let diferenciaPositivosNegativos;
    let respuesta;

    contador=0;
    acumulador=0;
    sumaNegativos=0;
    sumaPositivos=0;
    cantidadPositivos=0;
    cantidadNegativos=0;
    cantidadCeros=0;
    cantidadNumerosPares=0;
    promedioPositivos=0;
    promedioNegativos=0;
    diferenciaPositivosNegativos=0;
    respuesta='si'

    while(respuesta=='si')
    {
        numeroIngresado=prompt("Ingrese un numero");
        numeroIngresado=parseInt(numeroIngresado);
        contador=contador+1;
        respuesta=prompt("Desea continuar? si/no");
        if(numeroIngresado < 0)
        {
            sumaNegativos=sumaNegativos+numeroIngresado;
            cantidadNegativos=cantidadNegativos+1
            promedioNegativos=sumaNegativos/cantidadNegativos;
        }
        else
        {
            if(numeroIngresado>0)
            {
                sumaPositivos=sumaPositivos+numeroIngresado;
                cantidadNegativos=cantidadPositivos+1;
                promedioPositivos=sumaPositivos/cantidadPositivos;
            }
            else
            {
                cantidadCeros=cantidadCeros+1;
            }
        }
        diferenciaPositivosNegativos=sumaPositivos-sumaNegativos;
        if(numeroIngresado%2==0)
        {
            cantidadNumerosPares=cantidadNumerosPares+1;
        }
    }
    document.write("Suma de positivos: " + sumaPositivos + "<br>"); //preguntar como hacer punto aparte
	document.write("Suma de negativos: " + sumaNegativos + "<br>");
	document.write("Cantidad de positivos: " + cantidadPositivos + "<br>");
	document.write("Cantidad de negativos: " + cantidadNegativos + "<br>");
	document.write("Cantidad de ceros: " + cantidadCeros + "<br>");
	document.write("Cantidad de pares: " + cantidadPares + "<br>");
	document.write("Promedio de positivos: " + promedioPositivos + "<br>");
	document.write("Promedio de negativos: " + promedioNegativos + "<br>");
	document.write("Diferencia entre positivos y negativos: " + diferenciaPositivosNegativos + "<br>");
}