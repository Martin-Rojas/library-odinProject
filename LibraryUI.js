class LibraryUI {
  constructor(libraryInstance) {
    this.library = libraryInstance;

    this.ElementMain = document.querySelector(`#main`);

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

  getInputForm() {
    return {
      title: this.titleInput.value,
      author: this.authorInput.value,
      numberOfPages: this.pagesInput.value,
      read: this.statusInput.value,
    };
  }

  cleanDataForm() {
    this.titleInput.value = "";
    this.authorInput.value = "";
    this.pagesInput.value = "";
    this.statusInput.value = "read";
  }

  showStats() {
    this._totalBooksElement.innerHTML = this.library.getTotalBooks;
    this._readCountElement.innerHTML = this.library.getReadCount;
    this._noReadCountElement.innerHTML = this.library.getNoReadCount;
  }

  displayLibraryUI() {
    this.library.books.forEach((book) => {
      console.log(`${book.title}`);

      const cardElement = document.createElement("div");
      cardElement.className = "card";

      const h2Element = document.createElement("h2");
      h2Element.setAttribute(`id`, `title`);
      h2Element.innerText = book.title;
      cardElement.appendChild(h2Element);

      return this.ElementMain.appendChild(cardElement);
    });
    
  }
}

export { LibraryUI };
