export function saveContactsToLocalStorage(contactsData) {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
}

export function getContactsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('contacts')) || {};
}
