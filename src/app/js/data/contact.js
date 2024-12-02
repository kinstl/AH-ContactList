import {
    getContactsFromLocalStorage,
    saveContactsToLocalStorage,
} from './localStorage';

export function saveContact(contactId, name, vacancy, phone) {
    const firstLetter = name.charAt(0).toLowerCase();
    const contactsData = getContactsFromLocalStorage();

    if (!contactsData[firstLetter]) {
        contactsData[firstLetter] = [];
    }

    const contactIndex = contactsData[firstLetter].findIndex(
        (contact) => contact.id === contactId,
    );

    if (contactIndex !== -1) {
        contactsData[firstLetter][contactIndex] = {
            id: contactId,
            name,
            vacancy,
            phone,
        };
    } else {
        contactsData[firstLetter].push({ id: contactId, name, vacancy, phone });
    }

    saveContactsToLocalStorage(contactsData);
}

export function getContact(contactId) {
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        const contact = contacts.find((contact) => contact.id === contactId);

        if (contact) {
            return contact;
        }
    }

    return null;
}
