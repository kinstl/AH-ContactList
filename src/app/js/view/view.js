import { deleteContact, editContact } from '../data/contact';

export function createInfoNode(cardNode) {
    const newInfoNode = document.createElement('div');
    newInfoNode.classList.add('card__info');
    cardNode.append(newInfoNode);
    return newInfoNode;
}

export function createContact(infoNode, name, vacancy, phone, id) {
    if (!id) {
        id = `contact_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
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
        .addEventListener('click', () => deleteContact(newContactNode));

    newContactNode
        .querySelector('.js-contact-edit')
        .addEventListener('click', () => editContact(id, newContactNode));

    infoNode.append(newContactNode);

    return id;
}
