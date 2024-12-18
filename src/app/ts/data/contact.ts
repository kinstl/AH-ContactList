import { handleEditModal } from '../modal/handleEditModal';
import type { IContact } from '../types/contact';
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

export function saveContact(contact: IContact): void {
    const { name, vacancy, phone, id } = contact;

    const firstLetter = name.charAt(0).toLowerCase();
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        const contactIndex = contacts.findIndex(
            (existingContact) => existingContact.id === id,
        );

        if (contactIndex !== -1) {
            contacts.splice(contactIndex, 1);

            if (!contacts.length) {
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

export function addContact(cardNode: HTMLDivElement, contact: IContact): void {
    const infoNode: HTMLDivElement =
        cardNode.querySelector('.card__info') || createInfoNode(cardNode);

    cardNode.classList.add('filled');

    increaseCounterView(cardNode);

    contact.id = addIdToContact(contact.id);

    createContactView(infoNode, contact);
    saveContact(contact);
}

export function getContact(contactId: string): IContact | null {
    const contactsData = getContactsFromLocalStorage();
    let contact;

    for (const contacts of Object.values(contactsData)) {
        contact = contacts.find(
            (contact: IContact) => contact.id === contactId,
        );
    }

    return contact ? contact : null;
}

export function loadContacts(): void {
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        const cardNode = document.getElementById(
            `letter-${letter}`,
        ) as HTMLDivElement | null;

        if (!cardNode) return;

        cardNode.classList.add('filled');

        const infoNode: HTMLDivElement =
            cardNode.querySelector('.card__info') || createInfoNode(cardNode);

        contacts.forEach((contact) => {
            createContactView(infoNode, contact);
        });

        const numNode = cardNode.querySelector(
            '.card__num',
        ) as HTMLDivElement | null;

        if (!numNode) {
            console.error('Number node not found');
            return;
        }

        if (contacts.length) {
            numNode.innerText = String(contacts.length);
        } else {
            numNode.innerText = '';
        }
    }
}

export function updateContact(
    contactNode: HTMLDivElement,
    contact: IContact,
    isSearch: boolean,
): void {
    if (isSearch) {
        const contactsMainNodes: NodeListOf<HTMLDivElement> =
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

export function editContact(
    contactNode: HTMLDivElement,
    isSearch: boolean,
): void {
    const contactNodeId = contactNode.dataset.id;

    if (!contactNodeId) {
        console.error('Contact node id not found');
        return;
    }

    const contact = getContact(contactNodeId);

    if (!contact) {
        console.error('Contact not found');
        return;
    }

    handleEditModal(contact, contactNode, isSearch);
}

export function deleteContact(
    contactNode: HTMLDivElement,
    isSearch = false,
): void {
    const contactNodeId = contactNode.dataset.id;

    if (!contactNodeId) {
        console.error('Contact node id not found');
        return;
    }

    if (isSearch) {
        const contactsContainerNode = document.querySelector(
            '.modal--search__contacts',
        ) as HTMLDivElement;
        const contactsMainNodes: NodeListOf<HTMLDivElement> =
            document.querySelectorAll('.contacts .contact');

        contactsMainNodes.forEach((contactMainNode) => {
            const contactMainId = contactMainNode.dataset.id;

            if (contactMainId === contactNodeId) {
                deleteContactFromMainLayout(contactMainNode);
            }
        });

        contactNode.remove();

        if (!contactsContainerNode.childElementCount) {
            contactsContainerNode.classList.remove('filled');
        }
    } else {
        deleteContactFromMainLayout(contactNode);
    }

    deleteContactFromLocalStorage(contactNodeId);
}

function addIdToContact(contactId: string | undefined): string {
    if (!contactId) {
        const id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
        return id;
    } else {
        return contactId;
    }
}
