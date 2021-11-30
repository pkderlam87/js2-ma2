export function retrieveFromStorage(key) {
    const currentBooks = localStorage.getItem(key);
    if (!currentBooks) {
        return [];
    }
    return JSON.parse(currentBooks);
}