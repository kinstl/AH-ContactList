import { addContact } from './data/contact';
import { getContactsFromLocalStorage } from './data/localStorage';
import { clearInputs } from './helpers/clearInputs';
import { initContactsCardZIndex } from './helpers/initContactsCardZIndex';
import { initPhoneMask } from './helpers/initPhoneMask';
import { validate } from './helpers/validate';
import { createContact, createInfoNode } from './view/view';

const btnAddNode = document.getElementById('js-btn-add');
// const btnClearNode = document.getElementById('js-btn-clear');
const nameNode = document.getElementById('js-input-name');
const vacancyNode = document.getElementById('js-input-vacancy');
const phoneNode = document.getElementById('js-input-phone');
const contactsCardNodes = document.querySelectorAll('.contacts__card');

loadContacts();
initPhoneMask(phoneNode);
initContactsCardZIndex(contactsCardNodes);

btnAddNode.addEventListener('click', () => {
    const name = nameNode.value.trim();
    const nameFirstLetter = name.charAt(0).toLowerCase();
    const vacancy = vacancyNode.value.trim();
    const phone = phoneNode.value.trim();

    const targetCard = Array.from(contactsCardNodes).find(
        (node) => node.id === nameFirstLetter,
    );

    // Валидация на одинаковый контакт - проверяем данные, а не верстку
    const validationResult = validate(targetCard, name, vacancy, phone);

    if (!validationResult.status) {
        alert(validationResult.message);
        return;
    }

    addContact(targetCard, name, vacancy, phone);

    clearInputs(nameNode, vacancyNode, phoneNode);
});

contactsCardNodes.forEach((node) => {
    const cardContainerNode = node.querySelector('.card__container');
    cardContainerNode.addEventListener('click', () => {
        node.classList.toggle('show');
    });
});

function loadContacts() {
    const contactsData = getContactsFromLocalStorage();

    for (const [letter, contacts] of Object.entries(contactsData)) {
        const cardNode = document.getElementById(letter);

        if (cardNode) {
            cardNode.classList.add('filled');

            const infoNode =
                cardNode.querySelector('.card__info') ||
                createInfoNode(cardNode);

            contacts.forEach(({ id, name, vacancy, phone }) => {
                createContact(infoNode, name, vacancy, phone, id);
            });

            const numNode = cardNode.querySelector('.card__num');

            if (contacts.length) {
                numNode.innerText = contacts.length;
            } else {
                numNode.innerText = '';
            }
        }
    }
}
