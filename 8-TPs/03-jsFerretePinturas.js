/*
Maquez, Paloma Lara.
3.Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let fahrenheitCentigrados;
    let mensajeSalida;

    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseInt(temperatura);

    fahrenheitCentigrados = (temperatura-32) * 5/9;

    mensajeSalida = temperatura+"° Fahrenheit son "+fahrenheitCentigrados+"° Centigrados.";

    alert(mensajeSalida);

}

function CentigradosFahrenheit () 
{
	let temperatura;
    let centigradosFahrenheit;
    let mensajeSalida;

    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseInt(temperatura);

    centigradosFahrenheit = (temperatura * 9/5) + 32;

    mensajeSalida = temperatura+"° Centigrados son "+centigradosFahrenheit+"° Fahrenheit.";

    alert(mensajeSalida);
}
