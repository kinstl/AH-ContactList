import { handleEditModal } from '../modal/modal';
import { createContact, createInfoNode } from '../view/view';
import {
    getContactsFromLocalStorage,
    saveContactsToLocalStorage,
} from './localStorage';

export function saveContact(contactId, contact) {
    const { name, vacancy, phone } = contact;

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

export function addContact(cardNode, contact) {
    cardNode.classList.add('filled');

    const numNode = cardNode.querySelector('.card__num');
    const currentValue = parseInt(numNode.innerText, 10) || 0;
    numNode.innerText = currentValue + 1;

    const infoNode =
        cardNode.querySelector('.card__info') || createInfoNode(cardNode);

    const contactId = createContact(infoNode, contact);
    saveContact(contactId, contact);
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

export function updateContact(contactNode, contact, id) {
    const { name, vacancy, phone } = contact;

    const contactTextNode = contactNode.querySelector('.contact__text');
    contactTextNode.innerHTML = `
        <p class="contact__text">
            Name: ${name}<br/>
            Vacancy: ${vacancy}<br/>
            Phone: ${phone}
        </p>
        `;

    saveContact(id, contact);
}

export function editContact(id, contactNode) {
    const contact = getContact(id);

    handleEditModal(id, contact, contactNode);
}

export function deleteContact(contactNode) {
    const contactId = contactNode.dataset.id;
    const cardNode = contactNode.closest('.contacts__card');
    const numNode = cardNode.querySelector('.card__num');

    const currentValue = parseInt(numNode.innerText, 10) || 0;

    const firstLetter = cardNode.id;

    const contactsData = getContactsFromLocalStorage();

    contactNode.remove();

    if (contactsData[firstLetter]) {
        contactsData[firstLetter] = contactsData[firstLetter].filter(
            (contact) => contact.id !== contactId,
        );

        if (contactsData[firstLetter].length === 0) {
            delete contactsData[firstLetter];
        }

        saveContactsToLocalStorage(contactsData);
    }

    if (currentValue <= 1) {
        numNode.innerText = '';
        cardNode.classList.remove('filled', 'show');
    } else {
        numNode.innerText = currentValue - 1;
    }
}
