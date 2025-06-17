let library = new Library();

//let library = new Library();
library.addBook("PUNISHING: Gray Reaven",
    "Lucia",
    "science fiction",
    "114514",
    "F1S2",
    "A really good book");

library.addBook("Three-Body Problem",
    "Cixin Liu",
    "science fiction",
    "114515",
    "F1S3",
    "A science fiction book");

library.addBook("The Hitchhiker's Guide to the Galaxy",
    "Douglas Adams",
    "science fiction",
    "114516",
    "F1S4",
    "A humorous science fiction book");

// userId, name, email, password, isLibrarian
library.addUser("6194", "Alpha","alpha@gmail.com", "password123", true);
library.addUser("7234", "Lucia","lucia@gmail.com", "password123", false);

