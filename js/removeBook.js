import { books } from "./books.js";
import { createList } from "./script.js";

export function removeBook() {
    let listBooks = books;
    const deleteThisBook = event.target.dataset.item;
    const newList = listBooks.filter(function (item) {
        if (deleteThisBook !== item.title) {
            return true;
        }
    });
    listBooks = newList;
    createList(listBooks);
}
