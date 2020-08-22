let library = [];

const newBookForm = document.getElementById('newBookForm');
const tableContainer = document.getElementById('table-container');

function Book(title, author, length, read) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};

function addBookToLibrary(title, author, length, read) {
    const book = new Book(title, author, length, read);
    library.push(book);
}

newBookForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const length = document.getElementById('length').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, length, read);
    renderNewBook({title, author, length, read});
});

function render() {
    library.forEach((book) => {
        const currentRow = addRowToContainer(tableContainer);
        addBookToRow(book, currentRow);
    });
}

function renderNewBook(book) {
    addBookToRow(book, addRowToContainer(tableContainer));
}

function addRowToContainer(container) {
    const tr = document.createElement('tr');
    container.appendChild(tr);
    return tr;
}

function addBookToRow(book, row) {
    for (const property in book) {
        if (book.hasOwnProperty(property)) {
            const td = document.createElement('td');
            td.innerText = book[property];
            row.appendChild(td);
        }
    }
    const readButton = document.createElement('button');
    readButton.textContent = 'Read';
    readButton.onclick = function () {
        book.toggleReadStatus();
        renderBook(book, row);
    };
    row.appendChild(readButton);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        deleteBook(row)
    };
    row.appendChild(deleteBtn);
    return row;
}

function deleteBook(row) {
    tableContainer.removeChild(row);
}

function renderBook(book, row) {
    const newRow = document.createElement('tr');
    const newBookRow = addBookToRow(book, newRow);
    tableContainer.replaceChild(newBookRow, row);
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 405, true);
addBookToLibrary('Lord of the Rings: Fellowship of the Ring', 'J.R.R Tolkien', 600, true);
addBookToLibrary('Lord of the Rings: Two Towers', 'J.R.R Tolkien', 567, false);
addBookToLibrary('Lord of the Rings: Return of the King', 'J.R.R Tolkien', 645, false);

render();
