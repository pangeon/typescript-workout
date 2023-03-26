//? interface is in only typescript set  
interface Book {
    author: string;
    title: string;
    pages?: number;
    isRead?: boolean;
}
const show = (book: Book) => {
    console.log(`${book.author} wrote a book called "${book.title}"`);
    if (book.isRead !== undefined) {
        console.log(` This book is ${book.isRead ? "read" : "unread"} `);
    }
}
const setPages = (book: Book, pages: number) => {
    book.pages = pages;
}
const readBook = (book: Book) => {
    book.isRead = true;
}

const theManInTheHighCastle = {
    author: "Philip K Dick",
    title: "The Man in the High Castle",
    isRead: false
    // pages: 288
}
const dune: Book = {
    author: "Frank Herbert",
    title: "Dune",
    isRead: false
    // pages: 592
}

setPages(theManInTheHighCastle, 288);
show(theManInTheHighCastle);

show(dune);
readBook(dune);
show(dune);
