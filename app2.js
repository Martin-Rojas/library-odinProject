import { LibraryUI } from "./LibraryUI.js";
import Book from "./Book.js";
import Library from "./Library.js";

// Create an Instance of the class LibraryUI
// So I can use the properties of this class

const myLibrary = new Library();
const ui = new LibraryUI(myLibrary);
ui.showStats();

ui.showModal();

ui.bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(ui.getInputForm());

  const bookData = ui.getInputForm();

  console.log(bookData.title + "Inside of the submit event");

  const newBook = new Book(bookData);

  console.log(newBook.getNewBook().author + "New book inside the submit event");
  ui.cleanDataForm();

  myLibrary.addBookToLibrary(newBook.getNewBook());

  myLibrary.displayLibrary();
  ui.showStats();
});
