import BookClass from "./Book.js";

export default class Library {
  constructor() {
    this.books = [
      new BookClass({
        id: this.generateId(),
        title: `The hobbit`,
        author: `J.R.R Tolkien`,
        numberOfPages: `800`,
        read: `not read yet`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `Harry Potter and the Philosopher's Stone`,
        author: `J.K Rowling`,
        numberOfPages: `223`,
        read: `read`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `A Tale of Two Cities`,
        author: `Charles Dickens`,
        numberOfPages: `448`,
        read: `not read yet`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `The Alchemist`,
        author: `Paulo Coelho`,
        numberOfPages: `163`,
        read: `read`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `The Da Vinci Code`,
        author: `Dan Brown`,
        numberOfPages: `689`,
        read: `not read yet`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `The hobbit`,
        author: `J.R.R Tolkien`,
        numberOfPages: `800`,
        read: `not read yet`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `Harry Potter and the Philosopher's Stone`,
        author: `J.K Rowling`,
        numberOfPages: `223`,
        read: `read`,
      }),
      new BookClass({
        id: this.generateId(),
        title: `A Tale of Two Cities`,
        author: `Charles Dickens`,
        numberOfPages: `448`,
        read: `not read yet`,
      }),
    ];
  }

  generateId() {
    return "B" + Math.round(1000 * Math.random(1));
  }

  get getReadCount() {
    return this.books.filter((book) => book.read == "read").length;
  }

  get getNoReadCount() {
    return this.books.filter((book) => book.read !== "read").length;
  }

  get getTotalBooks() {
    return this.books.length;
  }

  addBookToLibrary(bookInstance) {
    if (
      !bookInstance.title ||
      !bookInstance.author ||
      !bookInstance.numberOfPages ||
      !bookInstance.read
    ) {
      console.log(`Missing book data`);
      return;
    }

    this.books.push(bookInstance);
    // console.log(`Book added: ${bookInstance.title}`);
  }

  removeBook(bookId) {
    const originalLength = this.books.length;
    this.books = this.books.filter((book) => book["id"] != bookId);

    if (this.books.length < originalLength) {
      console.log(`Book with ID ${bookId} removed.`);
    } else {
      console.warn(`No book found with ID ${bookId}.`);
    }
  }

  displayLibrary() {
    this.books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} ${book.id} read status: ${book.read}`
      );
    });

    console.log(
      `\n📊 Stats: Total Books: ${this.getTotalBooks} Read Books: ${this.getReadCount} No Read Books: ${this.getNoReadCount}`
    );
  }
}
