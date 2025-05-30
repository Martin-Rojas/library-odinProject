export default class BookClass {
  constructor({ title, author, numberOfPages, read }) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
  }

  set toggleReadStatus(read) {
    if (read === `read`) {
      // btn.innerText = `not read yet`;
      this.read = `not read yet`;
    } else {
      // btn.innerText = `read`;
      this.read = `read`;
    }
  }

  get statusBook() {
    return this.read;
  }
  
  /* It will return a plain object not a instance on the class Book*/
  getNewBook() {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      numberOfPages: this.numberOfPages,
      read: this.read,
    };
  }
}
