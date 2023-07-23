function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];

}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks === undefined) {
		return "student expelled";
	}
	this.marks.push(...marks);
	return this.marks
}
//спросить почему не получилось через in

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0
	} else {
		let sumMarks = this.marks.reduce(function(acc, item) {
			return acc + item;
		}, 0)
		return sumMarks / this.marks.length;
	}
}


Student.prototype.exclude = function(reason) {
	this.reason = reason;
	delete this.subject;
	delete this.marks;
	// if (this.reason === undefined) {
	//	this.reason = 'прогулы';
//	}
}
