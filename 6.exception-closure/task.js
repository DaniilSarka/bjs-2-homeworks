function parseCount(a) {
	if (Number.isNaN(Number.parseFloat(a))) {
		throw new Error("Невалидное значение");
	}
	let value = Number.parseFloat(a)
	return value
}

function validateCount(a) {
	try {
		return parseCount(a)
	} catch (Error) {
		console.log(Error)
		return (Error)
	}
}



class Triangle {
	constructor(a, b, c) {
		this.a = a
		this.b = b
		this.c = c

		if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
			throw new Error("Треугольник с такими сторонами не существует");

		}
	}

	get perimeter() {
		if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
			return "неправильное значение"
		} else {
			return this.a + this.b + this.c
		}
	}



	get area() {
		if (this.perimeter === undefined) {
			return "неправильное значение"
		} else {
			let semiPerimeter = this.perimeter / 2;
			let triangleSquare = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
			let TriangleSquareDot = triangleSquare.toFixed(3);
			return Number.parseFloat(TriangleSquareDot)
		}
	}
}

function getTriangle(a, b, c) {
	try {
		console.log(Triangle.perimeter + Triangle.area)
		return new Triangle(a, b, c);

	} catch (error) {
		Triangle.perimeter = "Ошибка! Треугольник не существует";
		Triangle.area = "Ошибка! Треугольник не существует";
		return Triangle

	}

}