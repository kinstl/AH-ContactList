import { addContact, deleteContact, updateContact } from '../data/contact';
import { initPhoneMask } from '../helpers/initPhoneMask';
import { handleValidation } from '../helpers/validate';
import type { IContact } from '../types/contact';
import { closeModal, openModal } from './modal';

export function handleEditModal(
    contact: IContact,
    contactNode: HTMLDivElement,
    isSearch: boolean,
): void {
    const { name, vacancy, phone, id } = contact;

    const overlayEditNode = document.querySelector(
        '.modal__overlay--edit',
    ) as HTMLDivElement;
    const saveBtnNode = document.querySelector(
        '.modal--edit #js-edit-save',
    ) as HTMLButtonElement;
    const nameNode = document.querySelector(
        '.modal--edit #js-edit-name',
    ) as HTMLInputElement;
    const vacancyNode = document.querySelector(
        '.modal--edit #js-edit-vacancy',
    ) as HTMLInputElement;
    const phoneNode = document.querySelector(
        '.modal--edit #js-edit-phone',
    ) as HTMLInputElement;

    initPhoneMask(phoneNode);

    nameNode.value = name;
    vacancyNode.value = vacancy;
    phoneNode.value = phone;

    const saveHandler = () => {
        const newContact = {
            id,
            name: nameNode.value,
            vacancy: vacancyNode.value,
            phone: phoneNode.value,
        };

        const nameFirstLetter = name.charAt(0).toLowerCase();
        const newNameFirstLetter = newContact.name.charAt(0).toLowerCase();

        const cardNode = document.getElementById(
            newNameFirstLetter,
        ) as HTMLDivElement;

        if (handleValidation(cardNode, newContact, true, phone)) {
            if (nameFirstLetter === newNameFirstLetter) {
                updateContact(contactNode, newContact, isSearch);
            } else {
                deleteContact(contactNode, isSearch);
                addContact(cardNode, newContact);
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
