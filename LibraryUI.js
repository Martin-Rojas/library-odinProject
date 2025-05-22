class LibraryUI {
  constructor() {
    this._modal = document.querySelector(`.modal`);
    this._openModal = document.querySelector(`.add-book`);
    this._closeModal = document.querySelector(`.close-model`);

    this._readCountElement = document.querySelector(`#read-number`);
    this._noReadCountElement = document.querySelector(`#unread-number`);
    this._totalBooksElement = document.querySelector(`#total-books`);

    this.bookForm = document.querySelector(`#book-form`);
    this.titleInput = document.querySelector("#book-title");
    this.authorInput = document.querySelector("#book-author");
    this.pagesInput = document.querySelector("#pages");
    this.statusInput = document.querySelector("#status");
  }

  get modal() {
    return this._modal;
  }

  showModal() {
    //Open a modal for add a new book
    this._openModal.addEventListener("click", (e) => {
      e.preventDefault();
      this._modal.classList.add(`modal--show`);
    });
    // Close a modal
    this._closeModal.addEventListener(`click`, (e) => {
      e.preventDefault();
      this._modal.classList.remove(`modal--show`);
    });
  }

  showStatistics() {}

  getInputFromForm() {
    return this.titleInput.value;
  }

  cleanDataForm() {}
}

export { LibraryUI };
