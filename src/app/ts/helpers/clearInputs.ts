export function clearInputs(...node: HTMLInputElement[]) {
    node.forEach((input) => (input.value = ''));
}
