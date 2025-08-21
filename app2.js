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

  /* Get data from the form original*/
  //const bookData = ui.getInputForm();

  const bookData = ui.getValidatedInputForm();
  
  if (!bookData) return; // 🚨 stop if invalid

  /* Pass data and create an instance of Book class*/
  const newBook = new Book(bookData);
  /* Clean data from the form*/
  ui.cleanDataForm();
  /* Pass the instance of the Book class to myLibrary*/
  myLibrary.addBookToLibrary(newBook);

  /* Show the stats from LibraryUI */
  ui.showStats();
  /* Display  the cards from the LibraryUI class*/
  ui.displayLibraryUI();
});
