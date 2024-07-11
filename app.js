const myLibrary = [];

function Book(title, author, numberOfPages, read) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}


function addBookToLibrary(){

}

const theHobbit = new Book(
    "The hobbit",
    `J.R.R Tolkien`,
    `295`,
    `not read yet`
  );