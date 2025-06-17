/* class BorrowingRecord{
    /* One-to-One: One BorrowingRecord is associated with one Book and 
with one User  
    Many-to-One: Multiple BorrowingRecords can be associated with 
one User and with one Book */
/*    constructor(borrower, borrowedBook, borrowDate, dueDate, isReturned = false){
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


} */