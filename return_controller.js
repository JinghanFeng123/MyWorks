const returnBookForm = document.getElementById('return-book-form');
    returnBookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        //const memberId = returnBookForm.elements['return-member-id'].value;
        const bookId = returnBookForm.elements['return-book-id'].value;
        let member = library.findUser(memberId);
        if(member.borrowedBooks.find((record) => record.borrowedBook.bookId == bookId)){
            member.returnBook(bookId);
            alert(`Successfully returned the book`);
        }
        else{
            alert(`You have not borrowed this books.`);
        }
    });
