const addBook = document.querySelector("#add");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookCategory = document.querySelector("#category");
const bookYear = document.querySelector("#year");
const bookPrice = document.querySelector("#price");
const bookCover = document.querySelector("#cover");
const addButton = document.querySelector("#addButton");
const sortAuthor = document.querySelector("#sortAuthor");
const sortCategory = document.querySelector("#sortCategory");
const sortPrice = document.querySelector("#sortPrice");
const container = document.querySelector(".container");
const bookContainer = document.querySelector(".book");
const addedBooks = JSON.parse(localStorage.getItem("books")) || [];

addButton.addEventListener("click", function (e) {
	e.preventDefault();
	const newBook = {
		title: `${bookTitle.value}`,
		author: `${bookAuthor.value}`,
		category: `${bookCategory.value}`,
		year: `${bookYear.value}`,
		cover: `${bookCover.value}`,
	};
	addedBooks.push(newBook);
	localStorage.setItem("book", JSON.stringify(addedBooks));

	const bookDiv = document.createElement("div");
	bookDiv.classList.add("book");
	const topContainer = document.createElement("div");
	topContainer.classList.add("topContainer");
	const image = document.createElement("img");
	image.src =
		"https://images.unsplash.com/photo-1681025243141-25cd6f243a13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80";
	const bottomContainer = document.createElement("div");
	bottomContainer.classList.add("bottomContainer");
	const title = document.createElement("h4");
	title.classList.add("title");
	title.textContent = bookTitle.value;
	const author = document.createElement("h4");
	author.classList.add("author");
	author.textContent = bookAuthor.value;
	const category = document.createElement("h4");
	category.classList.add("category");
	category.textContent = bookCategory.value;
	const year = document.createElement("h4");
	year.classList.add("year");
	year.textContent = bookYear.value;
	const price = document.createElement("h4");
	price.classList.add("price");
	price.textContent = bookPrice.value;
	const buttons = document.createElement("div");
	buttons.classList.add("buttons");
	const editButton = document.createElement("button");
	editButton.setAttribute("id", "bookEdit");
	editButton.innerText = "EDIT";
	const deleteButton = document.createElement("button");
	deleteButton.setAttribute("id", "bookDelete");
	deleteButton.innerText = "DELETE";
	topContainer.append(image);
	buttons.append(editButton, deleteButton);
	bottomContainer.append(title, author, category, year, price, buttons);
	bookDiv.append(topContainer, bottomContainer);
	container.append(bookDiv);
	addBook.reset();
});
