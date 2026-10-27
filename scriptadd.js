const form = document.querySelector("form");

form.addEventlistener("sumbit", function (event) {
    event.preventDefault();

    const book = {
        id: Date.now(),
        title:document.getElementById("title").Value,
        author: document.getElementById("author").Value,
        genre: document.getElementById("genre").value,
        pages: Number(document.getElementById("pages").value),
        status: document.getElementById("status").value,
        dateAdded: new date().tioSOString()
};

const books = loadBooks();
books.push(book);
saveBooks(books);

form.reset();
alert("book saved!");;
});
