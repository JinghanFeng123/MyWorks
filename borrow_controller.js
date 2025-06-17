
const borrowBookForm = document.getElementById('borrow-book-form');
borrowBookForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    //const memberId = memberId;
    const bookId = borrowBookForm.elements['borrow-book-id'].value;
    const dueDate = borrowBookForm.elements['due-date'].value;
    const dueDateObj = new Date(dueDate);
    // TO DO: Check that it is actually a member?
    let member = library.findUser(memberId);
    let book = library.findBook(bookId);
    if(member && book && member instanceof Member && dueDateObj > new Date()) {
        member.borrowBook(book, dueDate);
        alert('Successfully borrowed the book!');
    }
    // TO DO: Make this go on the page rather than the console!
    else{
        alert('Please enter the correct BookId and Duedate!');
    }
});
