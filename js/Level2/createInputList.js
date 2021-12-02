import { removeInputBook } from "./removeInputBook.js";
import { retrieveFromStorage } from "./retrieveFromStorage.js";
import { saveToStorage } from "./saveToStorage.js";
import { displayMessage } from "../displayMessage.js";

const listKey = "newBookByUser";

export function createInputList(listOfNewBooks, target) {
    const userList = document.querySelector(target);
    saveToStorage(listKey, listOfNewBooks);
    if (listOfNewBooks.length == 0) {
        displayMessage("noResults", "Add some new title", ".userBook");
    } else {
        userList.innerHTML = "";
        listOfNewBooks.forEach(function (listItem) {
            let isbn = "Unknown";

            if (listItem.isbn) {
                isbn = listItem.isbn;
            }
            userList.innerHTML += `<li class="list-group-item" value="${isbn}">
                    <div><h5 class="book__title">${listItem.title}</h5><p>${isbn}</p></div><i class="fas fa-trash-alt button trashInput" data-item = "${listItem.title}"></i>
                </li>`;
        });
        const trashInputBooks = document.querySelectorAll(".trashInput");
        trashInputBooks.forEach(function (title) {
            title.addEventListener("click", removeInputBook);
        });
    }
}
const listOfNewBooks = retrieveFromStorage(listKey);
createInputList(listOfNewBooks, ".userBook");
