import { createInputList } from "./createInputList.js";
import { retrieveFromStorage } from "./retrieveFromStorage.js";

let listItems = retrieveFromStorage();

export function removeInputBook() {
    console.log(event);
    const deleteThisItem = event.target.dataset.item;
    const newList = listItems.filter(function (item) {
        if (deleteThisItem !== item) {
            return true;
        }
    })
    listItems = newList;
    createInputList();
}