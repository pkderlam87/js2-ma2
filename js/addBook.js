import { books } from "./books.js";
import { createList } from "./script.js";
const listBooks = [];

const inputList = document.querySelector("input");
const addButton = document.querySelector("#button-addon1");

addButton.addEventListener("click", addToList);

export function addToList() {
    const newItem = inputList.value.trim();
    listBooks.push(newItem);
    //createList(listBooks);
    inputList.value = "";
    console.log(listBooks);
}