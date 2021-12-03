import { saveToStorage } from "./saveToStorage.js";
import { retrieveFromStorage } from "./retrieveFromStorage.js";
import { displayMessage } from "../displayMessage.js"


const listKey = "newBookByUser";
const emptyArray = [];

const inputList = document.querySelector("input");
const addButton = document.querySelector("#button-addon1");

addButton.addEventListener("click", addToList);

function addToList() {
    let listOfNewBooks = retrieveFromStorage(listKey);
    const newItem = inputList.value.trim();
    if (newItem.length >= 1) {
        const newBook = { isbn: "", title: newItem };
        inputList.value = "";
        inputList.focus();
        listOfNewBooks.push(newBook);
        createInputList(listOfNewBooks, ".userBook");
        saveToStorage(listKey, listOfNewBooks);

        /*console.log(listOfNewBooks);
        listOfNewBooks = retrieveFromStorage(listKey);
        console.log(listOfNewBooks);*/

    }
}
function createInputList(listOfNewBooks, target) {
    const userList = document.querySelector(target);
    saveToStorage(listKey, listOfNewBooks);
    if (listOfNewBooks.length == 0) {
        displayMessage("noResults", "Add some new title", ".userBook");
        localStorage.clear();
        saveToStorage(listKey, emptyArray);
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
    let listStorageBooks = retrieveFromStorage(listKey);
    const trashInputBooks = document.querySelectorAll(".trashInput");
    trashInputBooks.forEach(function (trashInput) {
        trashInput.addEventListener("click", function removeInputBook(event) {
            const deleteThisItem = event.target.dataset.item;
            const newList = listOfNewBooks.filter(function (item) {
                if (deleteThisItem !== item.title) {
                    return true;
                }
            })
            listStorageBooks = newList;
            saveToStorage(listKey, listStorageBooks);
            listStorageBooks = retrieveFromStorage(listKey);
            createInputList(listStorageBooks, ".userBook");
        });
    });
}
