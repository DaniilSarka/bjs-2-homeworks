function getArrayParams(...arr) {

	count = {};
	let min = Math.min(...arr);
	count.min = min;
	let max = Math.max(...arr);
	count.max = max;

	let res = arr.reduce(function(sum, elem) {
		return sum + elem;
	}, 0);

	let divide = res / arr.length;

	let average = (divide).toFixed(2);

	let avg = parseFloat(average);



	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	let summElem = arr.reduce(function(sum, elem) {

		return sum + elem;
	}, 0);

	return summElem;
	console.log("Сумма элементов: " + summElem);
};

function differenceMaxMinWorker(...arr) {

	if ((arr) === []) {

		return 0;
	}

	let min = Math.min(...arr);
	
	let max = Math.max(...arr);
	
	let result = max - min;

  if (result === -Infinity) {
    result = 0;
  }


	return result;

}

function differenceEvenOddWorker(...arr) {

	sumEvenElement = 0;
	sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {

			sumEvenElement += arr[i];

		} else {

			sumOddElement += arr[i];

		}

	}
	return sumEvenElement - sumOddElement;
	console.log("Разница: " + (sumEvenElement - sumOddElement));

}


function averageEvenElementsWorker(...arr) {

	sumEvenElement = 0;
	countEvenElement = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] % 2 === 0) {

			sumEvenElement += arr[i];
			countEvenElement += 1;

		}

	}
	if (sumEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;
	let result = sumEvenElement / countEvenElement;


}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {

		const total = func(...arrOfArr[i]);


		if (func(...arrOfArr[i]) > maxWorkerResult) {

			maxWorkerResult = func(...arrOfArr[i]);

		}



	}
	return maxWorkerResult
}

