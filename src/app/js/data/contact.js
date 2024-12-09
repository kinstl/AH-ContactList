import { handleEditModal } from '../modal/handleEditModal';
import {
    createContactView,
    createInfoNode,
    deleteContactFromMainLayout,
    increaseCounterView,
    updateContactView,
} from '../view/view';
import {
    deleteContactFromLocalStorage,
    getContactsFromLocalStorage,
    saveContactsToLocalStorage,
} from './localStorage';

export function saveContact(contact) {
    const { name, vacancy, phone, id } = contact;

    const firstLetter = name.charAt(0).toLowerCase();
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        const contactIndex = contacts.findIndex(
            (existingContact) => existingContact.id === id,
        );

        if (contactIndex !== -1) {
            contacts.splice(contactIndex, 1);

            if (contacts.length === 0) {
                delete contactsData[letter];
            }
            break;
        }
    }

    if (!contactsData[firstLetter]) {
        contactsData[firstLetter] = [];
    }

    contactsData[firstLetter].push({ id, name, vacancy, phone });

    saveContactsToLocalStorage(contactsData);
}

export function addContact(cardNode, contact) {
    const infoNode =
        cardNode.querySelector('.card__info') || createInfoNode(cardNode);

    cardNode.classList.add('filled');

    increaseCounterView(cardNode);

    contact.id = addIdToContact(contact.id);

    createContactView(infoNode, contact);
    saveContact(contact);
}

export function getContact(contactId) {
    const contactsData = getContactsFromLocalStorage();

    for (const contacts of Object.values(contactsData)) {
        const contact = contacts.find((contact) => contact.id === contactId);
        if (contact) {
            return contact;
        }
    }

    return null;
}

export function loadContacts() {
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        const cardNode = document.getElementById(letter);

        if (cardNode) {
            cardNode.classList.add('filled');

            const infoNode =
                cardNode.querySelector('.card__info') ||
                createInfoNode(cardNode);

            contacts.forEach((contact) => {
                createContactView(infoNode, contact);
            });

            const numNode = cardNode.querySelector('.card__num');

            if (contacts.length) {
                numNode.innerText = contacts.length;
            } else {
                numNode.innerText = '';
            }
        }
    }
}

export function updateContact(contactNode, contact, isSearch) {
    if (isSearch) {
        const contactsMainNodes =
            document.querySelectorAll('.contacts .contact');

        contactsMainNodes.forEach((contactMainNode) => {
            const contactMainId = contactMainNode.dataset.id;

            if (contactMainId === contact.id) {
                updateContactView(contact, contactMainNode);
            }
        });
    }

    updateContactView(contact, contactNode);

    saveContact(contact);
}

export function editContact(contactNode, isSearch) {
    const contact = getContact(contactNode.dataset.id);

    handleEditModal(contact, contactNode, isSearch);
}

export function deleteContact(contactNode, isSearch = false) {
    const contactId = contactNode.dataset.id;

    if (isSearch) {
        const contactsContainerNode = document.querySelector(
            '.modal--search__contacts',
        );
        const contactsMainNodes =
            document.querySelectorAll('.contacts .contact');

        contactsMainNodes.forEach((contactMainNode) => {
            const contactMainId = contactMainNode.dataset.id;

            if (contactMainId === contactId) {
                deleteContactFromMainLayout(contactMainNode);
            }
        });

        contactNode.remove();

        if (
            contactsContainerNode &&
            contactsContainerNode.childElementCount === 0
        ) {
            contactsContainerNode.classList.remove('filled');
        }
    } else {
        deleteContactFromMainLayout(contactNode);
    }

    deleteContactFromLocalStorage(contactId);
}

function addIdToContact(contactId) {
    if (!contactId) {
        const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
        return id;
    } else {
        return contactId;
    }
}
