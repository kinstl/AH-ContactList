export function initContactsCardZIndex(contactsCardNodes) {
    contactsCardNodes.forEach((node, index) => {
        node.style.zIndex = contactsCardNodes.length - index; // Чем выше элемент в DOM, тем больше z-index
    });
}
