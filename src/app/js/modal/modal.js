import { addContact, deleteContact, updateContact } from '../data/contact';

const overlayNode = document.querySelector('.modal__overlay');

export function handleEditModal(id, contact, contactNode) {
    openModal('.modal--edit');

    const { name, vacancy, phone } = contact;

    const saveBtnNode = document.querySelector('.modal--edit #js-edit-save');
    const nameNode = document.querySelector('.modal--edit #js-edit-name');
    const vacancyNode = document.querySelector('.modal--edit #js-edit-vacancy');
    const phoneNode = document.querySelector('.modal--edit #js-edit-phone');

    nameNode.value = name;
    vacancyNode.value = vacancy;
    phoneNode.value = phone;

    const saveHandler = () => {
        const newName = nameNode.value;
        const newVacancy = vacancyNode.value;
        const newPhone = phoneNode.value;

        const nameFirstLetter = name.charAt(0).toLowerCase();
        const newNameFirstLetter = newName.charAt(0).toLowerCase();

        contact = { name: newName, vacancy: newVacancy, phone: newPhone };

        if (nameFirstLetter === newNameFirstLetter) {
            updateContact(contactNode, contact, id);
        } else {
            const cardNode = document.getElementById(newNameFirstLetter);
            addContact(cardNode, newName, newVacancy, newPhone);
            deleteContact(contactNode);
        }

        saveBtnNode.removeEventListener('click', saveHandler);
        closeModal('.modal--edit');
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
