const mainElement = document.getElementById("main");
const openModal = document.querySelector(`.add-book`);
const closeModal = document.querySelector(`.close-model`);
const modal = document.querySelector(`.modal`);
const bookTitle = document.querySelector(`#book-title`);
const bookForm = document.querySelector(`#book-form`);

let myLibrary = [
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `The hobbit`,
    author: `J.R.R Tolkien`,
    numberOfPages: `800`,
    read: `not read yet`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K Rowling`,
    numberOfPages: `223`,
    read: `read`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `A Tale of Two Cities`,
    author: `Charles Dickens`,
    numberOfPages: `448`,
    read: `not read yet`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `The Alchemist`,
    author: `Paulo Coelho`,
    numberOfPages: `163`,
    read: `read`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `The Da Vinci Code`,
    author: `Dan Brown`,
    numberOfPages: `689`,
    read: `not read yet`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `The hobbit`,
    author: `J.R.R Tolkien`,
    numberOfPages: `800`,
    read: `not read yet`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K Rowling`,
    numberOfPages: `223`,
    read: `read`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `A Tale of Two Cities`,
    author: `Charles Dickens`,
    numberOfPages: `448`,
    read: `not read yet`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `The Alchemist`,
    author: `Paulo Coelho`,
    numberOfPages: `163`,
    read: `read`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `The Da Vinci Code`,
    author: `Dan Brown`,
    numberOfPages: `689`,
    read: `not read yet`,
  },
  {
    id: "B" + Math.round(1000 * Math.random(1)),
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K Rowling`,
    numberOfPages: `223`,
    read: `read`,
  },
];

function Book(title, author, numberOfPages, read) {
  this.id = "B" + Math.round(1000 * Math.random(1));
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(title, author, numberOfPages, read) {
  let newBook = new Book(title, author, numberOfPages, read);
  mainElement.innerHTML = ``;
  myLibrary.push(newBook);
}

function displayLibrary(library) {
  library.forEach((book) => {
    let id = book.id;

    const cardElement = document.createElement("div");
    cardElement.className = "card";

    const h2Element = document.createElement("h2");
    h2Element.setAttribute(`id`, `title`);
    h2Element.innerText = book.title;
    cardElement.appendChild(h2Element);

    const authorElement = document.createElement("p");
    authorElement.innerText = "By ";
    const authorSpanElement = document.createElement("span");
    authorSpanElement.setAttribute(`id`, `author`);
    authorSpanElement.innerHTML = `${book.author}`;
    authorElement.appendChild(authorSpanElement);
    cardElement.appendChild(authorElement);

    const statusElement = document.createElement(`p`);
    statusElement.innerText = `Status: `;
    const statusSpanElement = document.createElement("span");
    statusElement.innerText = `${book.read}`;
    statusElement.setAttribute("id", "status");
    statusElement.appendChild(statusSpanElement);
    cardElement.appendChild(statusElement);

    const bottomInfElement = document.createElement(`div`);
    bottomInfElement.className = `bottom-info`;

    const numberOfPagesElement = document.createElement(`p`);
    numberOfPagesElement.innerText = `pages `;
    const spanNumberOfPagesElement = document.createElement(`span`);
    spanNumberOfPagesElement.setAttribute("id", "pages-number");
    spanNumberOfPagesElement.innerText = `${book.numberOfPages}`;
    numberOfPagesElement.appendChild(spanNumberOfPagesElement);
    bottomInfElement.appendChild(numberOfPagesElement);

    const buttonElement = document.createElement(`button`);
    buttonElement.className = `delete`;
    const iElement = document.createElement(`i`);
    iElement.className = "fa-solid fa-trash";
    buttonElement.appendChild(iElement);
    bottomInfElement.appendChild(buttonElement);
    cardElement.appendChild(bottomInfElement);

    buttonElement.addEventListener(`click`, () => {
      removeBook(id);
    });

    mainElement.appendChild(cardElement);
  });
}

const removeBook = (id) => {
  myLibrary = myLibrary.filter((book) => book["id"] != id);
  mainElement.innerHTML = ``;
  displayLibrary(myLibrary);
};

displayLibrary(myLibrary);

// Open a modal for add a new book
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add(`modal--show`);
});

// Close a modal
closeModal.addEventListener(`click`, (e) => {
  e.preventDefault();
  modal.classList.remove(`modal--show`);
});

/* Add new book*/ 
bookForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  alert(bookTitle.value);
  console.log(document.forms[0].bookTitle.value);
  let title = document.forms[0].bookTitle.value;
  let author = document.forms[0].bookAuthor.value;
  let pages = document.forms[0].pages.value;
  let status = document.forms[0].status.value;

  addBookToLibrary(title, author, pages, status);

  displayLibrary(myLibrary);
});


