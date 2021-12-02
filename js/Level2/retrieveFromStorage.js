export function retrieveFromStorage(key) {
    const currentBooks = localStorage.getItem(key);
    if (!currentBooks) {
        return [];
    }
    console.log(currentBooks);
    return JSON.parse(currentBooks);
}