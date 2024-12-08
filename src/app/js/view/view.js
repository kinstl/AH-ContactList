import { deleteContact, editContact } from '../data/contact';

export function createInfoNode(cardNode) {
    const newInfoNode = document.createElement('div');
    newInfoNode.classList.add('card__info');
    cardNode.append(newInfoNode);
    return newInfoNode;
}

export function createContact(
    contactsContainerNode,
    contact,
    isSearch = false,
) {
    const { name, vacancy, phone } = contact;

    let id = contact.id;

    if (!id) {
        id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
        contact.id = id;
    }

    const newContactNode = document.createElement('div');
    newContactNode.classList.add('contact');
    newContactNode.dataset.id = id;

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
        .addEventListener('click', (event) => {
            event.stopPropagation();
            deleteContact(newContactNode, isSearch);
        });

    newContactNode
        .querySelector('.js-contact-edit')
        .addEventListener('click', (event) => {
            event.stopPropagation();
            editContact(newContactNode, isSearch);
        });

    contactsContainerNode.append(newContactNode);

    return id;
}

export function deleteContactFromMainLayout(contactNode) {
    const cardNode = contactNode.closest('.contacts__card');
    const numNode = cardNode.querySelector('.card__num');

    const currentValue = parseInt(numNode.innerText, 10) || 0;

    if (currentValue <= 1) {
        numNode.innerText = '';
        cardNode.classList.remove('filled', 'show');
    } else {
        numNode.innerText = currentValue - 1;
    }

    contactNode.remove();
}

export function updateContactView(contact, contactNode) {
    const { name, vacancy, phone } = contact;

    const contactTextNode = contactNode.querySelector('.contact__text');
    contactTextNode.innerHTML = `
        <p class="contact__text">
            Name: ${name}<br/>
            Vacancy: ${vacancy}<br/>
            Phone: ${phone}
        </p>
        `;
}
