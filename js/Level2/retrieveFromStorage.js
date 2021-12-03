export function retrieveFromStorage(key) {
    const currentBooks = localStorage.getItem(key);
    if (!currentBooks) {
        localStorage.clear();
        return [];
    }
    if (currentBooks.length == 0) {
        localStorage.clear();
    }
    return JSON.parse(currentBooks);
}