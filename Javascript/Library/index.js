console.log('I am the Library');

const theHobbit = {
    title: "The Hobbit",
    author: "J R R Tolkien",
    pages: 405,
    read: true,
    info: function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${
            this.read ? "read already" : "not read yet"
        }`;
    },
};

console.log('and this, is my book: ', theHobbit.info());
