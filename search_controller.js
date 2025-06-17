/*Having been transfered into the book_controller */

/* function populateSearch(filter = "") {
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
 */