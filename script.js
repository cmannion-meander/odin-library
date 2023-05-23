let myLibrary = [];

// function Book(title, author, pages, read) {
//   this.title = title
//   this.author = author
//   this.pages = pages
//   this.read = read
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  // const book = document.createElement('div');
  // book.classList.add('book');
  // book.textContent = `${newBook.title} by ${newBook.author}, ${newBook.pages} pages, ${newBook.read}`;
  // content.appendChild(book);
}

addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 275, "read")
addBookToLibrary("The Scholomance: A Deadly Education", "Naomi Novik", 315, "read")
addBookToLibrary("Discworld", "Terry Pratchett", 530, "to be read")

function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

const submit = document.querySelector(".btn");

submit.addEventListener("click", submitClick, false);

function submitClick(event) {
//   let warn = "preventDefault() won't let you check this!<br>";
//   document.getElementById("content").innerHTML += warn;
  event.preventDefault();
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.querySelector('input[name="read"]:checked').value;
  addBookToLibrary(title, author, pages, read);
  displayBooks();
  closeForm()
}

const content = document.querySelector('#content');

function displayBooks() {
  const elements = document.querySelectorAll('.book');

  elements.forEach((element) => {
    element.remove();
  });
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement('div');
    book.classList.add('book');
    newBook = myLibrary[i];
    book.textContent = `${newBook.title} by ${newBook.author}, ${newBook.pages} pages, ${newBook.read}`;
    book.setAttribute('id',i);
    // Add new div with read and remove options
    const tools = document.createElement('div');
    tools.classList.add('tools');
    let add = document.createElement("img");
    add.src = 'book-check.svg';
        if (newBook.read == "to be read") {
      add.setAttribute('id',i);
      add.addEventListener("click", readBook, false);
      tools.appendChild(add);
    };
    let remove = document.createElement("img");
    remove.src = 'book-remove.svg';
    remove.setAttribute('id',i);
    remove.addEventListener("click", removeBook, false);

    tools.appendChild(remove);
    book.appendChild(tools);
    content.appendChild(book);
  };
}

function readBook(id) {
  bookNum = id.currentTarget.id;
  book = myLibrary[bookNum];
  book.read = "read";
  displayBooks();
}

function removeBook(id) {
  bookNum = id.currentTarget.id;
  myLibrary.splice(bookNum, 1);
  displayBooks();
}

displayBooks();