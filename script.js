const library = [];
var bookcounter = 0;

function Book(title, author, pages, status, number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.number = number;
}

function buttons() {
    const form = document.getElementById("inputForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addBooktoLibrary();
    });
}

function addBooktoLibrary(book) {
    const form = document.forms['form'];
    let inputTitle = form.title;
    let inputAuthor = form.author;
    let inputPages = form.pages;
    let inputStatus = form.status;
    let id = bookcounter;
    const newBook = new Book(inputTitle, inputAuthor, inputPages, inputStatus, id);
    library.push(newBook);
    bookcounter++;

    // Reset form
    form.reset();
    displayBooks();
    return;
}

function displayBooks() {
    for (book in library) {
        
    }
}