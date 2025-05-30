import { LibraryUI } from "./LibraryUI.js";
import Book from "./Book.js";
import Library from "./Library.js";

// Create an Instance of the class LibraryUI
// So I can use the properties of this class

const myLibrary = new Library();
const ui = new LibraryUI(myLibrary);
ui.showStats();
/* Display the modal and toggle it off*/
ui.showModal();
ui.displayLibraryUI();

ui.bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(ui.getInputForm());
  /* Get data from the form*/
  const bookData = ui.getInputForm();
  /* Pass data and create an instance of Book class*/
  const newBook = new Book(bookData);
  /* Clean data from the form*/
  ui.cleanDataForm();
  /* Pass the instance of the Book class to myLibrary*/
  myLibrary.addBookToLibrary(newBook);
  /* Display the library */
  //   myLibrary.displayLibrary();
  /* Show the stats from LibraryUI */
  ui.showStats();
  /* Display  the cards from the LibraryUI class*/
  ui.displayLibraryUI();
});
