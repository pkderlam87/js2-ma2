import { books } from "./books.js";
import { addToList } from "./addBook.js";
import { removeBook } from "./removeBook.js";
import { displayMessage } from "./displayMessage.js";
import { retrieveFromStorage } from "./retrieveFromStorage.js";
import { saveToStorage } from "./saveToStorage.js";

export function createList(listBooks = books) {
    const listGroup = document.querySelector(".list-group");
    saveToStorage("listOfBooks", listBooks);
    if (listBooks.length == 0) {
        displayMessage("noResults", "There are no more items in the bookstore 😔", ".list-group");
    } else {
        listGroup.innerHTML = "";
        console.log(listBooks);
        for (let i = 0; i < listBooks.length; i++) {
            let isbn = "Unknown";

            if (listBooks[i].isbn) {
                isbn = listBooks[i].isbn;
            }
            listGroup.innerHTML += `<li class="list-group-item" value="${isbn}">
                    <div><h5 class="book__title">${listBooks[i].title}</h5><p>${isbn}</p></div><i class="fas fa-trash-alt button trash" data-item = "${listBooks[i].title}"></i>
                </li>`;
            console.log(listBooks);
        }
        const removeBooks = document.querySelectorAll(".trash");
        removeBooks.forEach(function (book) {
            book.addEventListener("click", removeBook);
            console.log(listBooks);
        });
    }
}
let listBooks = retrieveFromStorage("listOfBooks");
createList(listBooks);
