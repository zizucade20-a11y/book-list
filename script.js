function loadbooks() {
    const saved = localStorage.getitem("readlist-books");
    if (saved ===null) {
        return []
    }
}

fuction saveBooks(books) {
    localStorage.setItem("readlist-books", JASON.stringify(books));
}