import { addContact, deleteContact, updateContact } from '../data/contact';
import { getContactsFromLocalStorage } from '../data/localStorage';
import { initPhoneMask } from '../helpers/initPhoneMask';
import { handleValidation } from '../helpers/validate';
import { createContact } from '../view/view';

const overlaySearchNode = document.querySelector('.modal__overlay--search');
const bodyNode = document.querySelector('body');

export function handleEditModal(id, contact, contactNode) {
    const { name, vacancy, phone } = contact;

    const overlayEditNode = document.querySelector('.modal__overlay--edit');
    const saveBtnNode = document.querySelector('.modal--edit #js-edit-save');
    const nameNode = document.querySelector('.modal--edit #js-edit-name');
    const vacancyNode = document.querySelector('.modal--edit #js-edit-vacancy');
    const phoneNode = document.querySelector('.modal--edit #js-edit-phone');

    initPhoneMask(phoneNode);

    nameNode.value = name;
    vacancyNode.value = vacancy;
    phoneNode.value = phone;

    const saveHandler = () => {
        const newContact = {
            name: nameNode.value,
            vacancy: vacancyNode.value,
            phone: phoneNode.value,
        };

        const nameFirstLetter = name.charAt(0).toLowerCase();
        const newNameFirstLetter = newContact.name.charAt(0).toLowerCase();

        const cardNode = document.getElementById(newNameFirstLetter);

        if (handleValidation(cardNode, newContact, true, phone)) {
            if (nameFirstLetter === newNameFirstLetter) {
                updateContact(contactNode, newContact, id);
            } else {
                addContact(cardNode, newContact);
                deleteContact(contactNode);
            }

            closeHandler();
        }
    };

    saveBtnNode.addEventListener('click', saveHandler);

    const closeHandler = () => {
        overlayEditNode.classList.remove('opened');
        closeModal('.modal--edit');
        saveBtnNode.removeEventListener('click', saveHandler);
    };

    overlayEditNode.classList.add('opened');
    openModal('.modal--edit', closeHandler);
}

export function handleSearchModal() {
    const searchAllBtnNode = document.querySelector(
        '.modal--search #js-search-all',
    );
    const contactsNode = document.querySelector(
        '.modal--search .modal--search__contacts',
    );

    const searchAllHandler = () => {
        const contactsData = getContactsFromLocalStorage();

        if (!contactsData || Object.keys(contactsData).length === 0) {
            console.log('No contacts found.');
            return;
        }

        for (const contacts of Object.values(contactsData)) {
            contacts.forEach((contact) => {
                createContact(contactsNode, contact);
            });
        }

        contactsNode.classList.add('filled');
    };

    const closeHandler = () => {
        overlaySearchNode.classList.remove('opened');
        closeModal('.modal--search');
        searchAllBtnNode.removeEventListener('click', searchAllHandler);
        contactsNode.classList.remove('filled');
        contactsNode.innerHTML = '';
    };

    searchAllBtnNode.addEventListener('click', searchAllHandler);

    overlaySearchNode.classList.add('opened');
    openModal('.modal--search', closeHandler);
}

function openModal(modalSelector, onClose) {
    const modalNode = document.querySelector(modalSelector);
    const modalCloseNode = modalNode.querySelector('.modal__close');
    const modalContentNode = modalNode.querySelector('.modal__content');

    modalNode.classList.add('opened');
    bodyNode.classList.add('no-scroll');

    const btnCloseHandler = () => {
        closeHandler();
    };

    const outsideClickHandler = (event) => {
        if (!modalContentNode.contains(event.target)) {
            closeHandler();
        }
    };

    const escKeyHandler = (event) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    };

    const closeHandler = () => {
        modalCloseNode.removeEventListener('click', btnCloseHandler);
        modalNode.removeEventListener('click', outsideClickHandler);
        document.removeEventListener('keydown', escKeyHandler);
        onClose();
    };

    modalCloseNode.addEventListener('click', btnCloseHandler);
    modalNode.addEventListener('click', (event) => outsideClickHandler(event));
    document.addEventListener('keydown', escKeyHandler);
}

function closeModal(modalSelector = null) {
    if (modalSelector) {
        const modalNode = document.querySelector(modalSelector);
        modalNode.classList.remove('opened');
    } else {
        const openedModals = document.querySelectorAll('.modal.opened');
        openedModals.forEach((modal) => modal.classList.remove('opened'));
    }

    bodyNode.classList.remove('no-scroll');
}
