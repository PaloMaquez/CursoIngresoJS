/*
Maquez, Paloma Lara
9- Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
 */
function mostrar()
{
    let botonRandom;
    let mensajeSalida;

    botonRandom=Math.floor(Math.random() * 10) + 1;

    mensajeSalida="Tu numero random es: "+botonRandom;

    alert(mensajeSalida);
}