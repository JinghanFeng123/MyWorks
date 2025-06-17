function populateSearch(filter = "") {
        const bookDisplay = document.getElementById("search-display");
    bookDisplay.innerHTML = "";
        for (let book of library.catalogueSearch(filter)) {
            let bookDetails = document.createElement("li");
            bookDetails.innerHTML = book.title;
            bookDisplay.appendChild(bookDetails);
    }
}
populateSearch();

const catalogueSearchForm = document.getElementById('catalogue-search-form');
    catalogueSearchForm.addEventListener('submit', (event) => {
        event.preventDefault();
            const title = catalogueSearchForm.elements['title'].value;
        populateSearch(title);
});


function populateBooks() {
    const bookDisplay = document.getElementById("book-display");
    bookDisplay.innerHTML = "";
    library.catalogue.forEach(book => {
        const li = document.createElement("li");
        li.innerHTML = book.toString();
        bookDisplay.appendChild(li);
    });
};

populateBooks();
populateSearch();  // 刷新 Catalogue Search

const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (event) => {

    event.preventDefault(); // Stop form submission
    // Validate form data
    const title = addBookForm.elements['title'].value;
    const author = addBookForm.elements['author'].value;
    const genre = addBookForm.elements['genre'].value;
    const ISBN = addBookForm.elements['ISBN'].value;
    const location = addBookForm.elements['location'].value;
    const description = addBookForm.elements['description'].value;
    if(title != "" && author != "" && genre != "" && ISBN.length == 6 && location != "" && description != "") {
        library.addBook(title, author, genre, ISBN, location, description);
    }
    else{        
        alert("All fields are required and the ISBN should be 6 length.");
    }


    populateBooks();
    populateSearch();  // 刷新 Catalogue Search

});


const RemoveBookForm = document.getElementById('remove-book-form');
RemoveBookForm.addEventListener('submit', (event) => {

    event.preventDefault(); // Stop form submission
    // Validate form data    
    const ISBN = RemoveBookForm.elements['ISBN'].value;   
    if(ISBN.length == 6) {
        library.deleteBook(ISBN);
        alert("Successfully removed the book with ISBN: " + ISBN);
    }
    else{        
        alert("The ISBN should be 6 length.");
    }


    populateBooks();
    populateSearch();  // 刷新 Catalogue Search

});


