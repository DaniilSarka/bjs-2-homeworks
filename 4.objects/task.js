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
		return 0;
	}
	this.marks.push(...marks);
}
//спросить почему не получилось через in

Student.prototype.getAverage = function() {
	if (this.marks === undefined || this.marks.length === 0) {
		return 0
	} 
		let sumMarks = this.marks.reduce((acc, item)  => acc + item);
		return sumMarks / this.marks.length;
}


Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
	// if (this.reason === undefined) {
	//	this.reason = 'прогулы';
//	}
}
