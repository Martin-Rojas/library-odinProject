import { LibraryUI } from "./LibraryUI.js";
import Book from "./Book.js";
import Library from "./Library.js";

// Create an Instance of the class LibraryUI
// So I can use the properties of this class
const ui = new LibraryUI();

ui.showModal();

ui.bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(ui.getInputForm());

  const newBook = new Book(ui.getInputForm());

  console.log(newBook);
  ui.cleanDataForm();
  

  //   const myLibrary = new Library(newBook);
});
ui.showStats();


