let library = [];

function Book(title, author, length, read) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
}

// Book.prototype.info = function () {
//     return `${this.title} by ${this.author}, ${this.length} pages, ${
//         this.read ? "read already" : "not read yet"
//     }`;
// };

function addBookToLibrary(title, author, length, read) {
    const book = new Book(title, author, length, read);
    library.push(book);
}

function render() {
    const container = document.getElementById('container');

    library.forEach((book) => {
        const bookTitle = book.title;
        let titleContainer = document.createElement('h1');
        titleContainer.innerText = bookTitle
        container.appendChild(titleContainer);
    });

}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 405, true);
addBookToLibrary('Lord of the Rings: Fellowship of the Ring', 'J.R.R Tolkien', 600, true);
addBookToLibrary('Lord of the Rings: Two Towers', 'J.R.R Tolkien', 567, false);
addBookToLibrary('Lord of the Rings: Return of the King', 'J.R.R Tolkien', 645, false);

render();
