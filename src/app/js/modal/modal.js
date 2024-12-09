const bodyNode = document.querySelector('body');

export function openModal(modalSelector, onClose) {
    const modalNode = document.querySelector(modalSelector);
    const modalCloseNode = modalNode.querySelector('.modal__close');
    const modalContentNode = modalNode.querySelector('.modal__content');

    modalNode.classList.add('opened');
    bodyNode.classList.add('no-scroll');

    const btnCloseHandler = () => {
        closeHandler();
    };

    const outsideClickHandler = (event) => {
        if (!modalContentNode.contains(event.target)) {
            closeHandler();
        }
    };

    const escKeyHandler = (event) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    };

    const closeHandler = () => {
        modalCloseNode.removeEventListener('click', btnCloseHandler);
        modalNode.removeEventListener('click', outsideClickHandler);
        document.removeEventListener('keydown', escKeyHandler);
        onClose();
    };

    modalCloseNode.addEventListener('click', btnCloseHandler);
    modalNode.addEventListener('click', (event) => outsideClickHandler(event));
    document.addEventListener('keydown', escKeyHandler);
}

export function closeModal(modalSelector = null) {
    if (modalSelector) {
        const modalNode = document.querySelector(modalSelector);
        modalNode.classList.remove('opened');
    } else {
        const openedModals = document.querySelectorAll('.modal.opened');
        openedModals.forEach((modal) => modal.classList.remove('opened'));
    }

    bodyNode.classList.remove('no-scroll');
}
