/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNumero;
	let segundoNumero;
	let resultado;
	let mensajeSalida;
	
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero + segundoNumero;

	mensajeSalida="El resultado de la cuenta es: " +resultado;

	alert(mensajeSalida);	
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;
	let mensajeSalida;

	numero1=document.getElementById('txtIdNumeroUno').value;
	numero1=parseInt(numero1);

	numero2=document.getElementById('txtIdNumeroDos').value;
	numero2=parseInt(numero2);

	resultado= numero1 - numero2;

	mensajeSalida="El resultado de la cuenta es: "+resultado;

	alert(mensajeSalida);
}

function multiplicar()
{ 
	let primerNumero;
	let segundoNumero;
	let resultado;
	let mensajeSalida;
	
	primerNumero=document.getElementById('txtIdNumeroUno').value;
	primerNumero=parseInt(primerNumero);

	segundoNumero=document.getElementById('txtIdNumeroDos').value;
	segundoNumero=parseInt(segundoNumero);

	resultado=primerNumero * segundoNumero;

	mensajeSalida="El resultado de la cuenta es: " +resultado;

	alert(mensajeSalida);
}

function dividir()
{
	let numero1
	let numero2
	let resultado
	let mensajeSalida

	numero1=document.getElementById('txtIdNumeroUno').value;
	numero1=parseInt(numero1);

	numero2=document.getElementById('txtIdNumeroDos').value;
	numero2=segundoNumero=parseInt(numero2);

	resultado=numero1 / numero2;

	mensajeSalida="El resultado de la cuenta es: " +resultado;

	alert(mensajeSalida);
}

