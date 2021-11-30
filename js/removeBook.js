import { books } from "./books.js";
import { createList } from "./script.js";


let listBooks = books;

export function removeBook() {
    const bookToDelete = event.target.dataset.item;
    const newList = listBooks.filter(function (item) {
        if (bookToDelete !== item.title) {
            return true;
        }
    });
    listBooks = newList;
    createList(listBooks);
}
