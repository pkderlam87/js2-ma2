/*import { createInputList } from "./createInputList.js";
import { retrieveFromStorage } from "./retrieveFromStorage.js";
import { saveToStorage } from "./saveToStorage.js";

const listKey = "newBookByUser";
let listItems = retrieveFromStorage(listKey);
console.log(listItems);

export function removeInputBook() {
    const deleteThisItem = event.target.dataset.item;
    console.log(deleteThisItem);
    console.log(listItems);
    const newList = listItems.filter(function (item) {
        console.log(item.title);
        if (deleteThisItem !== item.title) {
            return true;
        }
    })
    console.log(newList);
    listItems = newList;
    console.log(listItems);
    saveToStorage(listKey, listItems);
    createInputList(listItems, ".userBook");
}*/