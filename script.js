let addedBooks = JSON.parse(localStorage.getItem("books")) || [];
let searchedBooks = JSON.parse(localStorage.getItem("searched")) || [];
let authorBooks = JSON.parse(localStorage.getItem("author")) || [];
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
const addButtonMobile = document.querySelector("#addButtonMobile");
const sortAuthor = document.querySelector("#sortAuthor");
const sortCategory = document.querySelector("#sortCategory");
const sortPrice = document.querySelector("#sortPrice");
const container = document.querySelector(".container");
const bookContainer = document.querySelector(".book");
const editButton = document.querySelector("#bookEdit");
const deleteButton = document.querySelector("#bookDelete");
const topAddButton = document.querySelector("#topAddButton");
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#search");
const mobileSearchButton = document.querySelector("#searchingButton");
const mobileSearchInput = document.querySelector("#searchMobile");
const authorSelect = document.querySelector("#authorSelect");
const genreSelect = document.querySelector("#sortCategory");
const mobileAuthorSelect = document.querySelector("#mobileAuthorSelect");
const mobileGenreSelect = document.querySelector("#mobileSortCategory");
const priceSelect = document.querySelector("#sortPrice");

topAddButton.addEventListener("click", function () {
	const div = document.querySelector(".addmaster");
	div.classList.toggle("hidden");
});

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
		const authorSelect = document.querySelector("#authorSelect");
		authorSelect.innerHTML = '<option value="all">Author</option>';
		const mobileAuthorSelect = document.querySelector("#mobileAuthorSelect");
		mobileAuthorSelect.innerHTML = '<option value="all">Author</option>';
		genreSelect.innerHTML = '<option value="all">Genre</option>';
		mobileGenreSelect.innerHTML = '<option value="all">Genre</option>';
		addedBooks.push(newBook);
		localStorage.setItem("books", JSON.stringify(addedBooks));
		displayBooks();
		addAuthor();
		addGenre();
		addMobileAuthor();
		addMobileGenre();
		addBook.reset();
	} else {
		addNewBookText.textContent = "PLEASE CHECK ALL VALUES";
		addNewBookText.style.color = "#e4dccf";
	}
	bookTitle.addEventListener("input", function () {
		addNewBookText.textContent = "";
	});
	bookAuthor.addEventListener("input", function () {
		addNewBookText.textContent = "";
	});
	bookCategory.addEventListener("input", function () {
		addNewBookText.textContent = "";
	});
	bookYear.addEventListener("input", function () {
		addNewBookText.textContent = "";
	});
	bookPrice.addEventListener("input", function () {
		addNewBookText.textContent = "";
	});
	bookCover.addEventListener("input", function () {
		addNewBookText.textContent = "";
	});
});

authorSelect.addEventListener("change", () => {
	const selectedAuthor = authorSelect.value;
	const addedBooks = JSON.parse(localStorage.getItem("books")) || [];
	let authorBooks = addedBooks;
	if (selectedAuthor !== "all") {
		authorBooks = addedBooks.filter((book) => book.author === selectedAuthor);
		container.innerHTML = "";
		for (let i = 0; i < authorBooks.length; i++) {
			const book = authorBooks[i];
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
			title.textContent = book.title;
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
	} else {
		displayBooks();
	}
});

mobileAuthorSelect.addEventListener("change", () => {
	const selectedAuthor = mobileAuthorSelect.value;
	const addedBooks = JSON.parse(localStorage.getItem("books")) || [];
	let authorBooks = addedBooks;
	if (selectedAuthor !== "all") {
		authorBooks = addedBooks.filter((book) => book.author === selectedAuthor);
		container.innerHTML = "";
		for (let i = 0; i < authorBooks.length; i++) {
			const book = authorBooks[i];
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
			title.textContent = book.title;
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
	} else {
		displayBooks();
	}
});

genreSelect.addEventListener("change", () => {
	const selectedGenre = genreSelect.value;
	const addedBooks = JSON.parse(localStorage.getItem("books")) || [];
	let genreBooks = addedBooks;
	if (selectedGenre !== "all") {
		genreBooks = addedBooks.filter((book) => book.category === selectedGenre);
		container.innerHTML = "";
		for (let i = 0; i < genreBooks.length; i++) {
			const book = genreBooks[i];
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
			title.textContent = book.title;
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
	} else {
		displayBooks();
	}
});
mobileGenreSelect.addEventListener("change", () => {
	const selectedGenre = mobileGenreSelect.value;
	const addedBooks = JSON.parse(localStorage.getItem("books")) || [];
	let genreBooks = addedBooks;
	if (selectedGenre !== "all") {
		genreBooks = addedBooks.filter((book) => book.category === selectedGenre);
		container.innerHTML = "";
		for (let i = 0; i < genreBooks.length; i++) {
			const book = genreBooks[i];
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
			title.textContent = book.title;
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
	} else {
		displayBooks();
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
		title.textContent = book.title;
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

function addAuthor() {
	addedBooks.forEach((book) => {
		const authorSelect = document.querySelector("#authorSelect");
		const select = document.createElement("option");
		select.setAttribute("value", `${book.author}`);
		select.id = `${book.author}`;
		const text = document.createTextNode(`${book.author}`);
		select.append(text);
		authorSelect.appendChild(select);
	});
}

function addMobileAuthor() {
	addedBooks.forEach((book) => {
		const mobileAuthorSelect = document.querySelector("#mobileAuthorSelect");
		const select = document.createElement("option");
		select.setAttribute("value", `${book.author}`);
		select.id = `${book.author}`;
		const text = document.createTextNode(`${book.author}`);
		select.append(text);
		mobileAuthorSelect.appendChild(select);
	});
}

function addGenre() {
	addedBooks.forEach((book) => {
		const genreSelect = document.querySelector("#sortCategory");
		const select = document.createElement("option");
		select.setAttribute("value", `${book.category}`);
		select.id = `${book.category}`;
		const text = document.createTextNode(`${book.category}`);
		select.append(text);
		genreSelect.appendChild(select);
	});
}

function addMobileGenre() {
	addedBooks.forEach((book) => {
		const mobileGenreSelect = document.querySelector("#mobileSortCategory");
		const select = document.createElement("option");
		select.setAttribute("value", `${book.category}`);
		select.id = `${book.category}`;
		const text = document.createTextNode(`${book.category}`);
		select.append(text);
		mobileGenreSelect.appendChild(select);
	});
}

function deleteBook(index) {
	if (localStorage.getItem("searched")) {
		console.log(index);
		let searchBooks = JSON.parse(localStorage.getItem("searched")) || [];
		let isSearched = searchBooks[index];
		Array.prototype.indexOfObject = function (property, value) {
			for (let i = 0; i < addedBooks.length; i++) {
				if (this[i][property] === value) return i;
			}
			return -1;
		};
		addedBooks.splice(addedBooks.indexOfObject("title", isSearched.title), 1);
		localStorage.setItem("books", JSON.stringify(addedBooks));
		displayBooks();
		const authorSelect = document.querySelector("#authorSelect");
		authorSelect.innerHTML = '<option value="all">Author</option>';
		addAuthor();
		const genreSelect = document.querySelector("#genreSelect");
		genreSelect.innerHTML = '<option value="all">Genre</option>';
		addGenre();
		localStorage.removeItem("searched");
	} else {
		addedBooks.splice(index, 1);
		localStorage.setItem("books", JSON.stringify(addedBooks));
		displayBooks();
		const authorSelect = document.querySelector("#authorSelect");
		authorSelect.innerHTML = '<option value="all">Author</option>';
		addAuthor();
		const genreSelect = document.querySelector("#genreSelect");
		genreSelect.innerHTML = '<option value="all">Genre</option>';
		addGenre();
		localStorage.removeItem("searched");
	}
}

function editBook(index) {
	if (localStorage.getItem("searched")) {
		let searchedBooks = JSON.parse(localStorage.getItem("searched")) || [];
		let isSearched = searchedBooks[index];
		Array.prototype.indexOfObject = function (property, value) {
			for (let i = 0; i < addedBooks.length; i++) {
				if (this[i][property] === value) return i;
			}
			return -1;
		};
		let book = addedBooks[addedBooks.indexOfObject("title", isSearched.title)];
		let newTitle = prompt("Edit the Title", book.title);
		book.title = newTitle;
		let newAuthor = prompt("Edit the Author", book.author);
		book.author = newAuthor;
		let newCategory = prompt("Edit the Category", book.category);
		book.category = newCategory;
		let newYear = prompt("Edit the Year", book.year);
		book.year = newYear;
		let newPrice = prompt("Edit the Price", book.price);
		book.price = newPrice;
		let newCover = prompt("Edit the Cover", book.cover);
		book.cover = newCover;
		localStorage.setItem("books", JSON.stringify(addedBooks));
		displayBooks();
		const authorSelect = document.querySelector("#authorSelect");
		authorSelect.innerHTML = '<option value="all">Author</option>';
		addAuthor();
		localStorage.removeItem("searched");
	} else {
		let booker = addedBooks[index];
		let newTitle = prompt("Edit the Title", booker.title);
		booker.title = newTitle;
		let newAuthor = prompt("Edit the Author", booker.author);
		booker.author = newAuthor;
		let newCategory = prompt("Edit the Category", booker.category);
		booker.category = newCategory;
		let newYear = prompt("Edit the Year", booker.year);
		booker.year = newYear;
		let newPrice = prompt("Edit the Price", booker.price);
		booker.price = newPrice;
		let newCover = prompt("Edit the Cover", booker.cover);
		booker.cover = newCover;
		localStorage.setItem("books", JSON.stringify(addedBooks));
		displayBooks();
		const authorSelect = document.querySelector("#authorSelect");
		authorSelect.innerHTML = '<option value="all">Author</option>';
		addAuthor();
	}
}

function burgerMenu() {
	const drop = document.querySelector("#myLinks");
	const icon = document.querySelector(".icon");
	if (drop.style.display === "block") {
		icon.innerHTML = '<i class="fa-solid fa-bars"></i>';
		drop.style.display = "none";
	} else {
		drop.style.display = "block";
		icon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
	}
}

const icon = document.querySelector(".icon");

addButtonMobile.addEventListener("click", function () {
	const div = document.querySelector(".addmaster");
	div.classList.toggle("hidden");
});

searchInput.addEventListener("input", function () {
	localStorage.removeItem("searched");
});
mobileSearchInput.addEventListener("input", function () {
	localStorage.removeItem("searched");
});

searchButton.addEventListener("click", searchBooks);

function searchBooks(e) {
	e.preventDefault();
	const searchInput = document.querySelector("#search").value.toLowerCase();
	const addedBooks = JSON.parse(localStorage.getItem("books"));
	const searchForm = document.querySelector("#searchForm");
	let foundBooks = null;
	let searchedBooks = JSON.parse(localStorage.getItem("searched")) || [];
	for (let i = 0; i < addedBooks.length; i++) {
		if (
			addedBooks[i].title.toLowerCase().includes(searchInput) ||
			addedBooks[i].author.toLowerCase().includes(searchInput) ||
			addedBooks[i].category.toLowerCase().includes(searchInput) ||
			addedBooks[i].year.includes(searchInput) ||
			addedBooks[i].price.includes(searchInput)
		) {
			foundBooks = addedBooks[i];
			searchedBooks.push(foundBooks);
			localStorage.setItem("searched", JSON.stringify(searchedBooks));
			container.innerHTML = "";
			for (let i = 0; i < searchedBooks.length; i++) {
				const book = searchedBooks[i];
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
				title.textContent = book.title;
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
				searchForm.reset();
			}
		}
	}
}

mobileSearchButton.addEventListener("click", searchMobileBooks);

function searchMobileBooks(e) {
	e.preventDefault();
	const mobileSearchInput = document
		.querySelector("#searchMobile")
		.value.toLowerCase();
	const addedBooks = JSON.parse(localStorage.getItem("books"));
	const mobileSearchForm = document.querySelector("#searchingForm");
	let foundBooks = null;
	let searchedBooks = JSON.parse(localStorage.getItem("searched")) || [];
	for (let i = 0; i < addedBooks.length; i++) {
		if (
			addedBooks[i].title.toLowerCase().includes(mobileSearchInput) ||
			addedBooks[i].author.toLowerCase().includes(mobileSearchInput) ||
			addedBooks[i].category.toLowerCase().includes(mobileSearchInput) ||
			addedBooks[i].year.includes(mobileSearchInput) ||
			addedBooks[i].price.includes(mobileSearchInput)
		) {
			foundBooks = addedBooks[i];
			searchedBooks.push(foundBooks);
			localStorage.setItem("searched", JSON.stringify(searchedBooks));
			container.innerHTML = "";
			for (let i = 0; i < searchedBooks.length; i++) {
				const book = searchedBooks[i];
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
				title.textContent = book.title;
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
				mobileSearchForm.reset();
			}
		}
	}
}
priceSelect.addEventListener("change", () => {
	const selectedPrice = priceSelect.value;
	const addedBooks = JSON.parse(localStorage.getItem("books")) || [];
	let pricedBooks = addedBooks;
	if (selectedPrice === "low") {
		pricedBooks = addedBooks.sort((a, b) => a.price - b.price);
		container.innerHTML = "";
		for (let i = 0; i < pricedBooks.length; i++) {
			const book = pricedBooks[i];
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
			title.textContent = book.title;
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
	} else if (selectedPrice === "high") {
		pricedBooks = addedBooks.sort((a, b) => b.price - a.price);
		container.innerHTML = "";
		for (let i = 0; i < pricedBooks.length; i++) {
			const book = pricedBooks[i];
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
			title.textContent = book.title;
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
	} else {
		displayBooks();
	}
});

displayBooks();
addAuthor();
addGenre();
addMobileGenre();
addMobileAuthor();
