/*
Maquez, Paloma Lara
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/
function mostrar()
{
    let numeroUno;
    let numeroDos;
    let respuesta;

    numeroUno=prompt("Ingrese un numero");
    numeroDos=prompt("Ingrese un segundo numero");

    if(numeroUno==numeroDos)
    {
        respuesta=numeroUno+numeroDos;
    }
    else
    {
        numeroUno=parseInt(numeroUno);
        numeroDos=parseInt(numeroDos);
        if(numeroUno>numeroDos)
        {
            respuesta=numeroUno-numeroDos
            if(respuesta>10)
            {
                respuesta=respuesta+"...la resta es "+respuesta+" y superó el 10";
            }
        }
        else
        {
            respuesta=numeroUno+numeroDos;
        }
    }
    alert(respuesta);
}
