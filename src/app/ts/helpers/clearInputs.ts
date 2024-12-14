export function clearInputs(...node: HTMLInputElement[]): void {
    node.forEach((input) => (input.value = ''));
}
