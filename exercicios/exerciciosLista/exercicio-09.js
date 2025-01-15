function authors(array) {
    let autor = [];
    for (let categoria of array) {
        for (let livros of categoria.books) {
            if (!autor.includes(livros.author)) {
                autor.push(livros.author);
            }
        }
    }
    return autor;
}
console.log(authors(booksByCategory));