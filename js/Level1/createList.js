import { removeBook } from "./removeBook.js";
import { displayMessage } from "../displayMessage.js";
import { books } from "./books.js";

export function createList(listBooks = books, target = ".list-group") {
    const listGroup = document.querySelector(target);
    if (listBooks.length == 0) {
        displayMessage("noResults", "There are no more items in the bookstore 😔", ".list-group");
    } else {
        listGroup.innerHTML = "";
        for (let i = 0; i < listBooks.length; i++) {
            /*let isbn = "Unknown";

            if (listBooks[i].isbn) {
                isbn = listBooks[i].isbn;
            }*/
            listGroup.innerHTML += `<li class="list-group-item" value="${listBooks[i].isbn}">
                    <div><h5 class="book__title">${listBooks[i].title}</h5><p>${listBooks[i].isbn}</p></div><i class="fas fa-trash-alt button trash" data-item = "${listBooks[i].title}"></i>
                </li>`;
        }
        const removeBooks = document.querySelectorAll(".trash");
        removeBooks.forEach(function (book) {
            book.addEventListener("click", removeBook);
        });
    }
};
createList();
