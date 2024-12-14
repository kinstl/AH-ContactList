import type { ContactsData } from '../types/contact';

export function saveContactsToLocalStorage(contactsData: ContactsData): void {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
}

export function getContactsFromLocalStorage(): ContactsData {
    const contacts = localStorage.getItem('contacts') || '{}';
    return JSON.parse(contacts) as ContactsData;
}

export function deleteContactFromLocalStorage(contactId: string): void {
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
