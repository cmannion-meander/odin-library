let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

const content = document.querySelector('#content');

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  const book = document.createElement('div');
  book.classList.add('book');
  book.textContent = `${newBook.title} by ${newBook.author}, ${newBook.pages} pages, ${newBook.read}`;
  content.appendChild(book);
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
  closeForm()
}