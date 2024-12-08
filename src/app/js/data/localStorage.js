export function saveContactsToLocalStorage(contactsData) {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
}

export function getContactsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('contacts')) || {};
}

export function deleteContactFromLocalStorage(contactId) {
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        contactsData[letter] = contacts.filter(
            (contact) => contact.id !== contactId,
        );

        if (contactsData[letter].length === 0) {
            delete contactsData[letter];
        }
    }

    saveContactsToLocalStorage(contactsData);
}
