export function clearInputs(...node) {
    node.forEach((input) => (input.value = ''));
}
