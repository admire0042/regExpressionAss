const txtResult = _el('txtResult');
const txtNum1 = _el('txtNum1');
const txtNum2 = _el('txtNum2');

const btn1 = _el('btn1');
const btn2 = _el('btn2');
const btn3 = _el('btn3');
const btn4 = _el('btn4');
const btn5 = _el('btn5');

btn1.addEventListener('click', calculate);
btn2.addEventListener('click', calculate);
btn3.addEventListener('click', calculate);
btn4.addEventListener('click', calculate);
btn5.addEventListener('click', calculate);



function calculate(e) {
	let num1 = parseInt(txtNum1.value);
	let num2 = parseInt(txtNum2.value);

	let operator = e.target.value;

	if (operator == "+") {
		txtResult.value = add(num1, num2);
	} else if (operator == "-") {
		txtResult.value = sub(num1, num2);
	} else if (operator == "*"){
		txtResult.value = multiply(num1, num2);
	} else if (operator == "/") {
		txtResult.value = divide(num1, num2);
	} else if (operator == "%") {
		txtResult.value = modulus(num1, num2);
	}
}


function add(firstNum, secondNum) {
	var result = firstNum + secondNum;
	return result; 
}

function sub(firstNum, secondNum) {
	var result = firstNum - secondNum;
	return result; 
}

function multiply(firstNum, secondNum) {
	var result = firstNum * secondNum;
	return result; 
}

function divide	(firstNum, secondNum) {
	if (secondNum == 0) {
		return "Cannot divide a number by zero";
	}
	var result = firstNum / secondNum;
	return result; 
}

function modulus(firstNum, secondNum) {
	var result = firstNum % secondNum;
	return result; 
}

function _el(elementID) {
	return document.getElementById(elementID);
}