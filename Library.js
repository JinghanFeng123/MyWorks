class Library{
    constructor(){
		this.lastUserId = 0;
		this.lastBookId = 0;
        this.catalogue = [];
        this.allMyUsers = [];
    }
	
	getNextBookId(){
		// Pre-increment the lastBookId, then return the new value.
		return ++(this.lastBookId);
	}

	getNextUserId(){
		// Pre-increment the lastUserId, then return the new value.
		return ++(this.lastUserId);
	} 

	catalogueSearch(title) {
		return this.catalogue.filter((book) => book.title.includes(title));
	}


	addBook(title, author, genre, ISBN, location, description){
		const book = new Book(this, title, author, genre, ISBN, location, description);
		this.catalogue.push(book);
	} 
	
	updateBook(bookId, title, author, genre, ISBN, location, description){
		// Update book details
		const book = this.catalogue.find(book => book.bookId === bookId);
		if (book) {
			book.updateDetails(title, author, genre, ISBN, location, description);
			return `Book with ID ${bookId} updated.`;
		} else {
			return `Book with ID ${bookId} not found.`;
		}
	} 

	deleteBook(ISBN){
		// Remove a book from the catalogue
		const bookIndex = this.catalogue.findIndex(book => book.ISBN === ISBN);
		if (bookIndex !== -1) {
			this.catalogue.splice(bookIndex, 1);
			return `Book with ISBN ${ISBN} removed from the catalogue.`;
		} else {
			return `Book with ISBN ${ISBN} not found in the catalogue.`;
		}
	}

	addUser(userId, name, email, password, isLibrarian) {
		let user;
		if (isLibrarian) {
			user = new Librarian(userId, name, email, password);
		} else {
			user = new Member(userId, name, email, password);
		}
		this.allMyUsers.push(user);
	}


	updateUser(userId, name, email, password){
		let user = this.findUser(userId);
		if(user){
			user.updateDetails(name, email, password);
			return true;
		}else{
			return false;
		}
	}

	deleteUser(userId){
		let user = this.findUser(userId);
		if(user && this.allMyUsers.includes(user)){
			let indexToDelete = this.allMyUsers.indexOf(user);
			this.allMyUsers.splice(indexToDelete, 1);
			return true;
		}
		else{
			return false;
		}
	}

	findUser(userId) {
    	return this.allMyUsers.find((user) => user.userId == userId);
	}
    
	findBook(bookId) {
    	return this.catalogue.find((book) => book.bookId == bookId);
	}

}