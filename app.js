const mainElement = document.getElementById("main");
const openModal = document.querySelector(`.add-book`);
const closeModal = document.querySelector(`.close-model`);
const modal = document.querySelector(`.modal`);
const bookTitle = document.querySelector(`#book-title`);
const bookForm = document.querySelector(`#book-form`);

let formData = new FormData(bookForm);

// let name = document.forms[0].book-title.value;
// //var Customer_Name = document.forms[0].customer_name.value;
// console.log(name);

const myLibrary = [
  {
    title: `The hobbit`,
    author: `J.R.R Tolkien`,
    numberOfPages: `800`,
    read: `not read yet`,
  },
  {
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K Rowling`,
    numberOfPages: `223`,
    read: `read`,
  },
  {
    title: `A Tale of Two Cities`,
    author: `Charles Dickens`,
    numberOfPages: `448`,
    read: `not read yet`,
  },
  {
    title: `The Alchemist`,
    author: `Paulo Coelho`,
    numberOfPages: `163`,
    read: `read`,
  },
  {
    title: `The Da Vinci Code`,
    author: `Dan Brown`,
    numberOfPages: `689`,
    read: `not read yet`,
  },
  {
    title: `The hobbit`,
    author: `J.R.R Tolkien`,
    numberOfPages: `800`,
    read: `not read yet`,
  },
  {
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K Rowling`,
    numberOfPages: `223`,
    read: `read`,
  },
  {
    title: `A Tale of Two Cities`,
    author: `Charles Dickens`,
    numberOfPages: `448`,
    read: `not read yet`,
  },
  {
    title: `The Alchemist`,
    author: `Paulo Coelho`,
    numberOfPages: `163`,
    read: `read`,
  },
  {
    title: `The Da Vinci Code`,
    author: `Dan Brown`,
    numberOfPages: `689`,
    read: `not read yet`,
  },
  {
    title: `Harry Potter and the Philosopher's Stone`,
    author: `J.K Rowling`,
    numberOfPages: `223`,
    read: `read`,
  },
];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
}

function addBookToLibrary(title, author, numberOfPages, read) {
  let newBook = new Book(title, author, numberOfPages, read);

  myLibrary.push(newBook);
}

function displayLibrary(library) {
  library.forEach((book) => {
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

    mainElement.appendChild(cardElement);
  });
}

displayLibrary(myLibrary);

// Rivise this part of code
const theHobbit = new Book(
  "The hobbit",
  `J.R.R Tolkien`,
  `295`,
  `not read yet`
);

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

  /*localStorage.setItem(`title`, title);
  localStorage.setItem(`author`, author);
  localStorage.setItem(`pages`, pages);
  localStorage.setItem(`status`, status);*/
  // console.dir(bookTitle);
});
