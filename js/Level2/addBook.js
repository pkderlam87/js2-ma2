import { saveToStorage } from "./saveToStorage.js";
import { retrieveFromStorage } from "./retrieveFromStorage.js";
import { createInputList } from "./createInputList.js";

const listKey = "newBookByUser";

const listOfNewBooks = retrieveFromStorage(listKey);
createInputList(listOfNewBooks, ".userBook");

const inputList = document.querySelector("input");
const addButton = document.querySelector("#button-addon1");

addButton.addEventListener("click", addToList);

export function addToList() {
    const newItem = inputList.value.trim();
    if (newItem.length >= 1) {
        const newBook = { isbn: "", title: newItem };
        inputList.value = "";
        inputList.focus();
        listOfNewBooks.push(newBook);
        createInputList(listOfNewBooks, ".userBook");
        saveToStorage(listKey, listOfNewBooks);
    }
}