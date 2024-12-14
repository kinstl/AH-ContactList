export function initContactsCardZIndex(
    contactsCardNodes: NodeListOf<HTMLDivElement>,
): void {
    contactsCardNodes.forEach((node, index) => {
        node.style.zIndex = String(contactsCardNodes.length - index); // Чем выше элемент в DOM, тем больше z-index
    });
}
