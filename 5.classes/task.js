class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	//почему не сработало return this.state * 1,5 ??

	set state(state) {

		if (state < 0) {
			return this._state = 0
		} else if (state > 100) {
			return this._state = 100
		} else {
			return this._state = state;
		}
	}

	get state() {
		return this._state;
	}

}



class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type, fix) {
		super(name, releaseDate, pagesCount, state, type, fix);
		this.type = "magazine"
	}

}

class Book extends PrintEditionItem {
	constructor(author, name, releseDate, pagesCount, state, type, fix) {
		super(name, releseDate, pagesCount, state, type, fix);
		this.author = author,
			this.type = "book"
	}
}

class NovelBook extends Book {
	constructor(author, name, releseDate, pagesCount, state, type, fix) {
		super(author, name, releseDate, pagesCount, state, type);
		this.type = "novel"
	}
}

class FantasticBook extends Book {
	constructor(author, name, releseDate, pagesCount, state, type, fix) {
		super(author, name, releseDate, pagesCount, state, type, fix);
		this.type = "fantastic";
	}

}


class DetectiveBook extends Book {
	constructor(author, name, releseDate, pagesCount, state, type, fix) {
		super(author, name, releseDate, pagesCount, state, type, fix);
		this.type = "detective"
	}
}


class Library {
	constructor(name, books) {
		this.name = name,
			this.books = []
	}
	addBook(PrintEditionItem) {
		if (PrintEditionItem.state > 30) {
			this.books.push(PrintEditionItem);
		}
	}

	/*findBookBy(type, value){
	   for ( let i = 0; i < this.books.length; i++){
	     if (type === value){
	       return this.books[i].name
	     } else {
	       return null
	     }
	   }
	 }*/

	findBookBy(type, value) {

		for (let i = 0; i < this.books.length; i++) {
			if (type in this.books[i] && value in this.books[i]) {
				return yes
			} else {
				return null
			}
		}
	}

	////// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//////////
	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)
			} else {
				return null
			}
		}

	}
}

