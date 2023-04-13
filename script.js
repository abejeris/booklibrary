let addedBooks = JSON.parse(localStorage.getItem("books")) || [];
const noBookText = document.querySelector("#noBookText");
const addBook = document.querySelector("#add");
const addNewBookText = document.querySelector("#addNewBook");
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
const editButton = document.querySelector("#bookEdit");
const deleteButton = document.querySelector("#bookDelete");

addButton.addEventListener("click", function (e) {
	e.preventDefault();
	const title = bookTitle.value;
	const author = bookAuthor.value;
	const category = bookCategory.value;
	const year = bookYear.value;
	const price = bookPrice.value;
	const cover = bookCover.value;

	if (
		title &&
		author &&
		category &&
		year >= 0 &&
		year <= 2024 &&
		price >= 0 &&
		cover
	) {
		const newBook = {
			title: title,
			author: author,
			category: category,
			year: year,
			price: price,
			cover: cover,
		};
		addedBooks.push(newBook);
		localStorage.setItem("books", JSON.stringify(addedBooks));
		displayBooks();
		addBook.reset();
	} else {
		addNewBookText.textContent = "PLEASE CHECK ALL VALUES";
		addNewBookText.style.color = "red";
	}
});

function displayBooks() {
	container.innerHTML = "";
	for (let i = 0; i < addedBooks.length; i++) {
		const book = addedBooks[i];
		const bookDiv = document.createElement("div");
		bookDiv.classList.add("book");
		const topContainer = document.createElement("div");
		topContainer.classList.add("topContainer");
		const image = document.createElement("img");
		image.src = book.cover;
		image.alt = "book cover";
		const bottomContainer = document.createElement("div");
		bottomContainer.classList.add("bottomContainer");
		const title = document.createElement("h4");
		title.classList.add("title");
		title.textContent = book.title.toUpperCase();
		const author = document.createElement("h4");
		author.classList.add("author");
		author.textContent = book.author;
		const category = document.createElement("h4");
		category.classList.add("category");
		category.textContent = book.category;
		const year = document.createElement("h4");
		year.classList.add("year");
		year.textContent = book.year;
		const price = document.createElement("h4");
		price.classList.add("price");
		price.textContent = `$ ${book.price}`;
		const buttons = document.createElement("div");
		buttons.classList.add("buttons");
		buttons.innerHTML = `<button class="bookEdit" onclick="editBook(${i})">EDIT</button> 
			<button class="bookDelete" onclick="deleteBook(${i})">DELETE</button>`;
		topContainer.append(image);
		bottomContainer.append(title, author, category, year, price, buttons);
		bookDiv.append(topContainer, bottomContainer);
		container.append(bookDiv);
	}
	if (addedBooks.length === 0) {
		noBookText.innerHTML =
			"No books to display, please add more books to your list";
	} else noBookText.innerHTML = "";
}

function deleteBook(index) {
	addedBooks.splice(index, 1);
	localStorage.setItem("books", JSON.stringify(addedBooks));
	displayBooks();
}

displayBooks();
