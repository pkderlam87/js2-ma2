export function saveToStorage(key, valueToSave) {
    localStorage.setItem(key, JSON.stringify(valueToSave));
}