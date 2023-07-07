function getArrayParams(...arr) {
	// let count = {};
	let min = Math.min(...arr);
	//count.min = min;
	let max = Math.max(...arr);
	//count.max = max;
	let res = arr.reduce(function(accumulator, currentValuem) {
		return accumulator + currentValuem;
	}, 0);
	let divide = res / arr.length;
	let average = (divide).toFixed(2);
	let avg = parseFloat(average);
	//count.avg = avg;
	//return count 
	return {
		min,
		max,
		avg
	};
}

function summElementsWorker(...arr) {
	let summElem = arr.reduce(function(accumulator, currentValuem) {
		return accumulator + currentValuem;
	}, 0);
	return summElem;
};

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return max - min;

}

function differenceEvenOddWorker(...arr) {
	sumEvenElement = 0;
	sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;

}


function averageEvenElementsWorker(...arr) {
	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	if (sumEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;


}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const total = func(...arrOfArr[i]);
		if (total > maxWorkerResult) {
			maxWorkerResult = total;
		}
	}
	return maxWorkerResult
}