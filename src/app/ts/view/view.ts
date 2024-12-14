import { deleteContact, editContact } from '../data/contact';
import type { IContact } from '../types/contact';

export function createInfoNode(cardNode: HTMLDivElement): HTMLDivElement {
    const newInfoNode = document.createElement('div');
    newInfoNode.classList.add('card__info');
    cardNode.append(newInfoNode);
    return newInfoNode;
}

export function createContactView(
    contactsContainerNode: HTMLDivElement,
    contact: IContact,
    isSearch: boolean = false,
) {
    const { name, vacancy, phone, id } = contact;

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
        ?.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteContact(newContactNode, isSearch);
        });

    newContactNode
        .querySelector('.js-contact-edit')
        ?.addEventListener('click', (event) => {
            event.stopPropagation();
            editContact(newContactNode, isSearch);
        });

    contactsContainerNode.append(newContactNode);
}

export function deleteContactFromMainLayout(contactNode: HTMLDivElement) {
    const cardNode = contactNode.closest(
        '.contacts__card',
    ) as HTMLDivElement | null;
    const numNode = cardNode?.querySelector(
        '.card__num',
    ) as HTMLDivElement | null;

    if (!numNode || !cardNode) {
        console.error('Card node or number node not found');
        return;
    }

    const currentValue = parseInt(numNode?.innerText, 10) || 0;

    if (currentValue <= 1) {
        numNode.innerText = '';
        cardNode.classList.remove('filled', 'show');
    } else {
        numNode.innerText = String(currentValue - 1);
    }

    contactNode.remove();
}

export function updateContactView(
    contact: IContact,
    contactNode: HTMLDivElement,
) {
    const { name, vacancy, phone } = contact;

    const contactTextNode = contactNode.querySelector(
        '.contact__text',
    ) as HTMLDivElement | null;

    if (!contactTextNode) {
        console.error('Contact text node not found');
        return;
    }

    contactTextNode.innerHTML = `
        <p class="contact__text">
            Name: ${name}<br/>
            Vacancy: ${vacancy}<br/>
            Phone: ${phone}
        </p>
        `;
}

export function increaseCounterView(cardNode: HTMLDivElement) {
    const numNode = cardNode.querySelector(
        '.card__num',
    ) as HTMLDivElement | null;

    if (!numNode) {
        console.error('Number node not found');
        return;
    }

    const currentValue = parseInt(numNode.innerText, 10) || 0;
    numNode.innerText = String(currentValue + 1);
}
