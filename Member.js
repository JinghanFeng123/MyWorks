class BorrowingRecord{
    /* One-to-One: One BorrowingRecord is associated with one Book and 
with one User  
    Many-to-One: Multiple BorrowingRecords can be associated with 
one User and with one Book */
    constructor(borrower, borrowedBook, borrowDate, dueDate, isReturned = false){
        this.borrower = borrower; // Member
        this.borrowedBook = borrowedBook; // Book
        this.borrowDate = borrowDate; // Date
        this.dueDate = dueDate; // Date
        this.isReturned = isReturned; // Boolean
    }

     checkOverdue(){
            const currentDate = new Date();
            if(this.dueDate < currentDate && this.isReturned == false){
                return `This book is overdue.`;
            }
            else{
                return `This book is not overdue.`;
            }
     } 
     
     returnBook(){
        this.isReturned = true;
        this.borrowedBook.markAsReturned();
    }


}


class Member extends User{
    //(inherits from User)
    constructor(userId, name, email, password) {
        super(userId, name, email, password);
        this.borrowedBooks = [];
    }

    borrowBook(borrowedBook, dueDate) {//create a borrowing record
        let borrowingRecord = new BorrowingRecord(this, 
						   borrowedBook, 
						   Date.now(), 
						   dueDate
						  );
        // push the borrowing record to the borrowingRecords array
        this.borrowedBooks.push(borrowingRecord);
            borrowedBook.markAsBorrowed();
            return `You have borrowed the book: ${borrowedBook.title}`;
     } 
     
    returnBook(bookId) {
    if (!this.borrowingRecords) this.borrowingRecords = [];
    if (!this.borrowedBooks) this.borrowedBooks = [];
    let borrowingRecord = this.borrowedBooks.find(
        (record) => record.borrowedBook.bookId == bookId
    );
    if (borrowingRecord) {
        borrowingRecord.returnBook();
        let recordIndex = this.borrowingRecords.indexOf(borrowingRecord);
        if (recordIndex !== -1) {
            this.borrowingRecords.splice(recordIndex, 1);
        }
        let bookIndex = this.borrowedBooks.indexOf(borrowingRecord);
        if (bookIndex !== -1) {
            this.borrowedBooks.splice(bookIndex, 1);
        }
    }
}

    checkBorrowingStatus(){
        if(this.borrowingRecords.length == 0){
            return `You have not borrowed any books.`;
        }
        else{
            let out = "";
            for(let borrowingRecord of this.borrowedBooks){
                let book = borrowingRecord.borrowedBook;
                out += book.toString() + "\n";
            }
            return out.trim();
        }
    }

    toString(){
        return `Member ID: ${this.userId} | Name: ${this.name} | Email: ${this.email}`;
    }
}