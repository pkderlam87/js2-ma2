import { retrieveFromStorage } from "./retrieveFromStorage.js";
import { saveToStorage } from "./saveToStorage.js";
import { displayMessage } from "../displayMessage.js";

const listKey = "BooksByUser";

export function createInputList(listOfNewBooks, target) {
    const userList = document.querySelector(target);
    saveToStorage(listKey, listOfNewBooks);
    console.log(listOfNewBooks);
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
    }
    const trashInputBooks = document.querySelectorAll(".trashInput");
    trashInputBooks.forEach(function (trashInput) {
        trashInput.addEventListener("click", removeInputBook);
    });
}
let listOfNewBooks = retrieveFromStorage(listKey);
console.log(listOfNewBooks);
createInputList(listOfNewBooks, ".userBook");

function removeInputBook() {
    const deleteThisItem = event.target.dataset.item;
    console.log(deleteThisItem);
    console.log(listOfNewBooks);
    const newList = listOfNewBooks.filter(function (item) {
        console.log(item.title);
        if (deleteThisItem !== item.title) {
            return true;
        }
    })
    console.log(newList);
    listOfNewBooks = newList;
    console.log(listOfNewBooks);
    saveToStorage(listKey, listOfNewBooks);
    console.log(listOfNewBooks);
    listOfNewBooks = retrieveFromStorage(listKey);
    createInputList(listOfNewBooks, ".userBook");
}