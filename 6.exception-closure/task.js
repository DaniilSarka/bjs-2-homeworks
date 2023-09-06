function parseCount(a) {
	let value = Number.parseFloat(a);
	let error = new Error("Невалидное значение")
	if (Number.isNaN(value)) {
		throw error;
	}
	return value
}

function validateCount(a) {
	try {
		return parseCount(a)
	} catch (error) {
		return error
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
		return this.a + this.b + this.c

	}

	get area() {

		let semiPerimeter = this.perimeter / 2;
		let triangleSquare = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
		let TriangleSquareDot = triangleSquare.toFixed(3);
		return Number.parseFloat(TriangleSquareDot)

	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		class Triangle {

			get perimeter() {
				return "Ошибка! Треугольник не существует"

			}
			
			get area() {
				return "Ошибка! Треугольник не существует"

			}
		}
		let NotTriangle = new Triangle;
		return NotTriangle

	}
}