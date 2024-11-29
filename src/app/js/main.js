import { initContactsCardZIndex } from './helpers/initContactsCardZIndex';
import { initPhoneMask } from './helpers/phoneMask';
import { validateValues } from './helpers/validate';

const btnAddNode = document.getElementById('js-btn-add');
const btnClearNode = document.getElementById('js-btn-clear');
const nameNode = document.getElementById('js-input-name');
const vacancyNode = document.getElementById('js-input-vacancy');
const phoneNode = document.getElementById('js-input-phone');
const contactsCardNodes = document.querySelectorAll('.contacts__card');

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
    const validationResult = validateValues(targetCard, name, vacancy, phone);

    if (!validationResult.status) {
        alert(validationResult.message);
        return;
    }

    updateCard(targetCard, name, vacancy, phone);

    // clearInputs();
});

contactsCardNodes.forEach((node) => {
    const cardContainerNode = node.querySelector('.card__container');
    cardContainerNode.addEventListener('click', () => {
        node.classList.toggle('show');
    });
});

function updateCard(cardNode, name, vacancy, phone) {
    cardNode.classList.add('filled');

    const numNode = cardNode.querySelector('.card__num');
    const currentValue = parseInt(numNode.innerText, 10) || 0;
    numNode.innerText = currentValue + 1;

    const infoNode =
        cardNode.querySelector('.card__info') || createInfoNode(cardNode);

    createContact(infoNode, name, vacancy, phone);
}

function createInfoNode(cardNode) {
    const newInfoNode = document.createElement('div');
    newInfoNode.classList.add('card__info');
    cardNode.append(newInfoNode);
    return newInfoNode;
}

function createContact(infoNode, name, vacancy, phone) {
    const newContactNode = document.createElement('div');
    newContactNode.classList.add('contact');

    newContactNode.innerHTML = `
        <p class="contact__text">
            Name: ${name}<br/>
            Vacancy: ${vacancy}<br/>
            Phone: ${phone}
        </p>
        <i class="fa-solid fa-pen js-contact-edit"></i>
        <i class="fa-solid fa-xmark js-contact-delete"></i>
    `;

    newContactNode
        .querySelector('.js-contact-delete')
        .addEventListener('click', () =>
            deleteContact(infoNode, newContactNode),
        );

    newContactNode
        .querySelector('.js-contact-edit')
        .addEventListener('click', () => editContact(infoNode, newContactNode));

    infoNode.append(newContactNode);
}

function editContact() {
    console.log(213);
}

function deleteContact(infoNode, contactNode) {
    contactNode.remove();

    const cardNode = infoNode.closest('.contacts__card');
    const numNode = cardNode.querySelector('.card__num');
    const currentValue = parseInt(numNode.innerText, 10) || 0;

    if (currentValue <= 1) {
        numNode.innerText = '';
        cardNode.classList.remove('filled', 'show');
    } else {
        numNode.innerText = currentValue - 1;
    }
}

function clearInputs() {
    [nameNode, vacancyNode, phoneNode].forEach((input) => (input.value = ''));
}
