
const search = document.getElementById('search-books');
const bookList = document.getElementById('book-list');
console.log(search, bookList);
var titles = document.getElememtsByClassName('titles');


console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));


titles.forEach(function(item){
    console.log(item);
})


const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
// console.log(books);

books = documents.querySelectorAll('#book-list li .name');
// console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
});


var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent = 'test';
});
