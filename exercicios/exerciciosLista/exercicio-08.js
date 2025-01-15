function countBooksInCategory(books){
    let livrosContagem = {};
    for (let secao of books) {
        livrosContagem[secao.category] = secao.books.length;
    }
    return livrosContagem;
}

console.log(countBooksInCategory(booksByCategory));