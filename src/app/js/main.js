const btnAddNode = document.getElementById('js-btn-add');
const btnClearNode = document.getElementById('js-btn-clear');
const nameNode = document.getElementById('js-input-name');
const vacancyNode = document.getElementById('js-input-vacancy');
const phoneNode = document.getElementById('js-input-phone');
const contactsCardNodes = document.querySelectorAll('.contacts__card');

btnAddNode.addEventListener('click', () => {
    const name = nameNode.value.trim();
    const vacancy = vacancyNode.value.trim();
    const phone = phoneNode.value.trim();

    // if (!name || !vacancy || !phone) {
    //     alert('All fields are required!');
    //     return;
    // }

    const nameFirstLetter = name.charAt(0).toLowerCase();

    const targetCard = Array.from(contactsCardNodes).find(
        (node) => node.id === nameFirstLetter,
    );

    if (!targetCard) {
        alert('No card for this letter!');
        return;
    }

    updateCard(targetCard, name, vacancy, phone);

    // clearInputs();
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
        <i class="fa-solid fa-xmark js-contact-delete"></i>
    `;

    newContactNode
        .querySelector('.js-contact-delete')
        .addEventListener('click', () =>
            deleteContact(infoNode, newContactNode),
        );

    infoNode.append(newContactNode);
}

function deleteContact(infoNode, contactNode) {
    contactNode.remove();

    const cardNode = infoNode.closest('.contacts__card');
    const numNode = cardNode.querySelector('.card__num');
    const currentValue = parseInt(numNode.innerText, 10) || 0;

    if (currentValue <= 1) {
        numNode.innerText = '';
        cardNode.classList.remove('filled');
    } else {
        numNode.innerText = currentValue - 1;
    }
}

function clearInputs() {
    [nameNode, vacancyNode, phoneNode].forEach((input) => (input.value = ''));
}
