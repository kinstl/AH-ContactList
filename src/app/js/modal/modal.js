import { addContact, deleteContact, updateContact } from '../data/contact';
import { initPhoneMask } from '../helpers/initPhoneMask';
import { handleValidation } from '../helpers/validate';

const overlayNode = document.querySelector('.modal__overlay');
const bodyNode = document.querySelector('body');

export function handleEditModal(id, contact, contactNode) {
    const { name, vacancy, phone } = contact;

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

            closeModal('.modal--edit');
            saveBtnNode.removeEventListener('click', saveHandler);
        }
    };

    saveBtnNode.addEventListener('click', saveHandler);

    openModal('.modal--edit', saveHandler);
}

export function handleSearchModal() {
    const searchAllBtnNode = document.querySelector(
        '.modal--search #js-search-all',
    );

    const searchAllHandler = () => {
        console.log(123);
        searchAllBtnNode.removeEventListener('click', searchAllHandler);
    };

    searchAllBtnNode.addEventListener('click', searchAllHandler);

    openModal('.modal--search', searchAllHandler);
}

function openModal(modalSelector, onSave) {
    const modalNode = document.querySelector(modalSelector);
    const modalCloseNode = modalNode.querySelector('.modal__close');
    const modalContentNode = modalNode.querySelector('.modal__content');
    const modalButtonNode = modalNode.querySelector('.modal__button');

    overlayNode.classList.add('opened');
    modalNode.classList.add('opened');
    bodyNode.classList.add('no-scroll');

    const closeHandler = () => {
        closeModal(modalSelector);
        cleanup();
    };

    const outsideClickHandler = (event) => {
        if (!modalContentNode.contains(event.target)) {
            closeModal(modalSelector);
            cleanup();
        }
    };

    const escKeyHandler = (event) => {
        if (event.key === 'Escape') {
            closeModal(modalSelector);
            cleanup();
        }
    };

    const cleanup = () => {
        modalCloseNode.removeEventListener('click', closeHandler);
        modalNode.removeEventListener('click', outsideClickHandler);
        document.removeEventListener('keydown', escKeyHandler);
        modalButtonNode.removeEventListener('click', onSave);
    };

    modalCloseNode.addEventListener('click', closeHandler);
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

    overlayNode.classList.remove('opened');
    bodyNode.classList.remove('no-scroll');
}
