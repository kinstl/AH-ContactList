import { addContact, loadContacts } from './data/contact';
import { clearInputs } from './helpers/clearInputs';
import { initContactsCardZIndex } from './helpers/initContactsCardZIndex';
import { initPhoneMask } from './helpers/initPhoneMask';
import { handleValidation } from './helpers/validate';
import { handleSearchModal } from './modal/handleSearchModal';

const btnAddNode = document.getElementById(
    'js-btn-add',
) as HTMLButtonElement | null;
const btnClearNode = document.getElementById(
    'js-btn-clear',
) as HTMLButtonElement | null;
const btnSearchNode = document.getElementById(
    'js-btn-search',
) as HTMLButtonElement | null;
const nameNode = document.getElementById(
    'js-input-name',
) as HTMLInputElement | null;
const vacancyNode = document.getElementById(
    'js-input-vacancy',
) as HTMLInputElement | null;
const phoneNode = document.getElementById(
    'js-input-phone',
) as HTMLInputElement | null;
const contactsCardNodes =
    document.querySelectorAll<HTMLElement>('.contacts__card');

interface IContact {
    name: string;
    vacancy: string;
    phone: string;
}

loadContacts();
initPhoneMask(phoneNode);
initContactsCardZIndex(contactsCardNodes);

btnAddNode?.addEventListener('click', () => {
    if (!nameNode || !vacancyNode || !phoneNode) {
        console.error('Input nodes are missing');
        return;
    }

    const contact: IContact = {
        name: nameNode.value,
        vacancy: vacancyNode.value,
        phone: phoneNode.value,
    };

    const nameFirstLetter = contact.name.charAt(0).toLowerCase();

    const targetCard = Array.from(contactsCardNodes).find(
        (node) => node.id === nameFirstLetter,
    );

    if (!handleValidation(targetCard, contact)) {
        return;
    }

    addContact(targetCard, contact);

    clearInputs(nameNode, vacancyNode, phoneNode);
});

btnClearNode?.addEventListener('click', () => {
    contactsCardNodes.forEach((node) => {
        const infoNode = node.querySelector(
            '.card__info',
        ) as HTMLElement | null;
        const numNode = node.querySelector('.card__num') as HTMLElement | null;

        if (infoNode && numNode) {
            infoNode.remove();
            numNode.innerText = '';
            node.classList.remove('filled');
        }
    });

    localStorage.removeItem('contacts');
});

btnSearchNode?.addEventListener('click', () => {
    handleSearchModal();
});

contactsCardNodes.forEach((node) => {
    const cardContainerNode = node.querySelector('.card__container');
    cardContainerNode?.addEventListener('click', () => {
        node.classList.toggle('show');
    });
});
