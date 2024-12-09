import { addContact, loadContacts } from './data/contact';
import { clearInputs } from './helpers/clearInputs';
import { initContactsCardZIndex } from './helpers/initContactsCardZIndex';
import { initPhoneMask } from './helpers/initPhoneMask';
import { handleValidation } from './helpers/validate';
import { handleSearchModal } from './modal/modal';

const btnAddNode = document.getElementById('js-btn-add');
const btnClearNode = document.getElementById('js-btn-clear');
const btnSearchNode = document.getElementById('js-btn-search');
const nameNode = document.getElementById('js-input-name');
const vacancyNode = document.getElementById('js-input-vacancy');
const phoneNode = document.getElementById('js-input-phone');
const contactsCardNodes = document.querySelectorAll('.contacts__card');

loadContacts();
initPhoneMask(phoneNode);
initContactsCardZIndex(contactsCardNodes);

btnAddNode.addEventListener('click', () => {
    const contact = {
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

btnClearNode.addEventListener('click', () => {
    contactsCardNodes.forEach((node) => {
        const infoNode = node.querySelector('.card__info');
        const numNode = node.querySelector('.card__num');

        if (infoNode && numNode) {
            infoNode.remove();
            numNode.innerText = '';
            node.classList.remove('filled');
        }
    });

    localStorage.removeItem('contacts');
});

btnSearchNode.addEventListener('click', () => {
    handleSearchModal();
});

contactsCardNodes.forEach((node) => {
    const cardContainerNode = node.querySelector('.card__container');
    cardContainerNode.addEventListener('click', () => {
        node.classList.toggle('show');
    });
});
