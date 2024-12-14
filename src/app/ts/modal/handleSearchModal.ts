import { getContactsFromLocalStorage } from '../data/localStorage';
import { normalizePhone } from '../helpers/normalizePhone';
import { normalizeString } from '../helpers/normalizeString';
import type { IContact } from '../types/contact';
import { createContactView } from '../view/view';
import { closeModal, openModal } from './modal';

const overlaySearchNode = document.querySelector('.modal__overlay--search');

export function handleSearchModal(): void {
    const searchAllBtnNode = document.querySelector(
        '.modal--search #js-search-all',
    ) as HTMLButtonElement;
    const contactsNode = document.querySelector(
        '.modal--search .modal--search__contacts',
    ) as HTMLDivElement;
    const searchInputNode = document.querySelector(
        '.modal--search #js-search-input',
    ) as HTMLInputElement;

    const isContactInContainer = (contact: IContact) =>
        !!contactsNode?.querySelector(`.contact[data-id="${contact.id}"]`);

    const renderContacts = (contacts: IContact[]) => {
        contacts.forEach((contact) => {
            if (!isContactInContainer(contact)) {
                createContactView(contactsNode, contact, true);
            }
        });
        contactsNode?.classList.add('filled');
    };

    const searchContacts = () => {
        const searchQuery = normalizeString(searchInputNode.value);
        const contactsData = getContactsFromLocalStorage();

        if (!searchQuery) {
            contactsNode.innerHTML = '';
            contactsNode.classList.remove('filled');
            return;
        }

        const foundContacts = Object.values(contactsData).flatMap((contacts) =>
            contacts.filter(
                (contact) =>
                    normalizeString(contact.name).includes(searchQuery) ||
                    normalizeString(contact.vacancy).includes(searchQuery) ||
                    normalizeString(contact.phone).includes(searchQuery) ||
                    normalizePhone(contact.phone).includes(searchQuery),
            ),
        );

        contactsNode.innerHTML = '';
        if (foundContacts.length === 0) {
            contactsNode.classList.add('filled');
            contactsNode.innerHTML = '<p>No matching contacts found.</p>';
            return;
        }

        renderContacts(foundContacts);
    };

    const showAllContacts = () => {
        const contactsData = getContactsFromLocalStorage();

        if (!contactsData || Object.keys(contactsData).length === 0) {
            contactsNode.classList.add('filled');
            contactsNode.innerHTML = '<p>No contacts found.</p>';
            return;
        }

        const allContacts = Object.values(contactsData).flat();
        renderContacts(allContacts);
    };

    const closeHandler = () => {
        overlaySearchNode?.classList.remove('opened');
        closeModal('.modal--search');

        searchAllBtnNode?.removeEventListener('click', showAllContacts);

        searchInputNode?.removeEventListener('input', searchContacts);
        searchInputNode.value = '';

        contactsNode.classList.remove('filled');
        contactsNode.innerHTML = '';
    };

    searchAllBtnNode.addEventListener('click', showAllContacts);
    searchInputNode.addEventListener('input', searchContacts);

    overlaySearchNode?.classList.add('opened');
    openModal('.modal--search', closeHandler);
}
