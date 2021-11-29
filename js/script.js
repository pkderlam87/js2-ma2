import { books } from "./books.js";
import { addToList } from "./addBook.js";
import { removeBook } from "./removeBook.js";


export function createList(listBooks = books) {
    console.log(listBooks);
    const listGroup = document.querySelector(".list-group");
    listGroup.innerHTML = "";
    for (let i = 0; i < listBooks.length; i++) {
        let isbn = "Unknown";

        if (listBooks[i].isbn) {
            isbn = listBooks[i].isbn;
        }
        listGroup.innerHTML += `<li class="list-group-item" value="${isbn}">
    <h5 class="book__title">${listBooks[i].title}</h5><i class="fas fa-trash-alt button trash" data-item = "${listBooks[i].title}"></i>
  </li>`;
    }
    const removeBooks = document.querySelectorAll(".trash");
    removeBooks.forEach(function (book) {
        book.addEventListener("click", removeBook);
    });
}
createList();