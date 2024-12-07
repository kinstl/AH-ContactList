import { addContact, deleteContact, updateContact } from '../data/contact';
import { initPhoneMask } from '../helpers/initPhoneMask';
import { handleValidation } from '../helpers/validate';

const overlayNode = document.querySelector('.modal__overlay');

export function handleEditModal(id, contact, contactNode) {
    openModal('.modal--edit');

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
}

export function handleSearchModal() {
    openModal('.modal--search');
}

overlayNode.addEventListener('click', () => {
    closeModal();
});

function openModal(modalSelector) {
    const modalNode = document.querySelector(modalSelector);
    const modalCloseNode = modalNode.querySelector('.modal__close');

    overlayNode.classList.add('opened');
    modalNode.classList.add('opened');

    const closeHandler = () => {
        closeModal(modalSelector);
        modalCloseNode.removeEventListener('click', closeHandler);
    };

    modalCloseNode.addEventListener('click', closeHandler);
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
}
