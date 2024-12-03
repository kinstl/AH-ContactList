import { saveContact } from '../data/contact';

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

    saveBtnNode.addEventListener('click', () => {
        const newName = nameNode.value;
        const newVacancy = vacancyNode.value;
        const newPhone = phoneNode.value;

        contact = { name: newName, vacancy: newVacancy, phone: newPhone };

        updateContact(contactNode, contact, id);
        closeModal('.modal--edit');
    });
}

function updateContact(contactNode, contact, id) {
    const { name, vacancy, phone } = contact;

    const contactTextNode = contactNode.querySelector('.contact__text');
    contactTextNode.innerHTML = `
        <p class="contact__text">
            Name: ${name}<br/>
            Vacancy: ${vacancy}<br/>
            Phone: ${phone}
        </p>
        `;

    saveContact(id, name, vacancy, phone);
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
