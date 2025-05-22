import { LibraryUI } from "./LibraryUI.js";

// Create an Instance of the class LibraryUI
// So I can use the properties of this class
const ui = new LibraryUI();

ui.showModal();

ui.bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(ui.getInputForm());
});

