let library = [];

function Book(title, author, length, read) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
}

Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.length} pages, ${
        this.read ? "read already" : "not read yet"
    }`;
};

function addBookToLibrary(book) {
    library.push(book)
}

const hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 405, true);
addBookToLibrary(hobbit);
console.log('current library: ', library)
