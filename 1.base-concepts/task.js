"use strict";
function solveEquation(a, b, c) {
	let arr = [];
	let positiveRootMoreZero;
	let negativeRootMoreZero;
	let rootEqualsZero;
	let d = b ** 2 - 4 * a * c;

	console.log("Дискриминант равен: " + d);

	if (d < 0) {
		return arr = [];
		console.log("Нет корней уровнения" + arr);
	} else if (d > 0) {
		positiveRootMoreZero = (-b + Math.sqrt(d)) / (2 * a);
		negativeRootMoreZero = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(positiveRootMoreZero, negativeRootMoreZero);
		console.log("Корень уравнения х1: " + arr[0] + "," + " Корень уравнения х2: " + arr[1]);
		return arr = [positiveRootMoreZero, negativeRootMoreZero];

	} else(d === 0) 
  {
		rootEqualsZero = -b / (2 * a);
		arr.push(rootEqualsZero);
		console.log("Корень уравнения х: " + arr[0]);
		return arr = [rootEqualsZero];

	}
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {


	if (Number.isNaN(percent)) {
		return false;
	} else if (Number.isNaN(contribution)) {

		return false;

	} else if (Number.isNaN(amount)) {

		return false;
	} else if (Number.isNaN(countMonths)) {

		return false;

	} else {





		let indexRange = percent / 100;
		console.log("Ставка от 0 до 1: " + indexRange);
		let rateInMonth = indexRange / 12;
		console.log("Месячная ставка : " + rateInMonth);
		let creditBody = amount - contribution;
		console.log("Тело кредита : " + creditBody);
		let paymentInMonth = creditBody * (rateInMonth + (rateInMonth / (((1 + rateInMonth) ** countMonths) - 1)));
		let payment = paymentInMonth * 12;
		let resultPayment = (payment).toFixed(2);
		return parseFloat(resultPayment);
	}
}