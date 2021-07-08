/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resultado;
	var mensajeSalida;

	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	dividendo=parseInt(dividendo);
	
	divisor=document.getElementById('txtIdNumeroDivisor').value;
	divisor=parseInt(divisor);

	resultado=dividendo % divisor;

	mensajeSalida="El resultado es: " +resultado;

	alert(mensajeSalida);
}
