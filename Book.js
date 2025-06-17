class Book{
    constructor(library, title, author, genre, ISBN, location, description){
        this.theLibrary = library
        this.bookId = library.getNextBookId();
        this.title = title; 
        this.author = author;  
        this.genre = genre;
        this.ISBN = ISBN;
        this.location = location;
        this.description = description;
        this.borrowingRecord = null;
        this.availableToBorrow = true;
    }
    
    markAsBorrowed(){
        if(this.availableToBorrow == true){
            this.availableToBorrow = false;
        }
        else{
            console.log(`This book has been borrowed.`);
        }
        
    }

    markAsAvailable(){
        if(this.availableToBorrow == false){
            this.availableToBorrow = true;
        }
        else{
            console.log(`This book has not been borrowed yet.`);
        }
    }
    
    markAsReturned(){
        this.availableToBorrow = true;
    }

    canBorrow(){
        if(this.availableToBorrow == true){
            console.log('You can borrow it.')
        }
        else{
            console.log('You cannot borrow it.')
        }
    }

    updateDetails(){
        // Update book details
        this.title = title; 
        this.author = author;  
        this.genre = genre;
        this.ISBN = ISBN;
        this.location = location;
        this.description = description;
    }
    
    toString(){
         return `Book ID: ${this.bookId} | Title: ${this.title} | Author: ${this.author} | Genre: ${this.genre} | ISBN: ${this.ISBN} | Location: ${this.location} | Description: ${this.description}`;
    }
}