export function initPhoneMask(input: HTMLInputElement): void {
    input.addEventListener('input', () => {
        const cursorPosition = input.selectionStart;
        let value = input.value.replace(/\D/g, '');

        if (!value.startsWith('7')) {
            value = '7' + value;
        }

        let formatted = '+7';
        if (value.length > 1) formatted += ` (${value.substring(1, 4)}`;
        if (value.length >= 5) formatted += `) ${value.substring(4, 7)}`;
        if (value.length >= 8) formatted += `-${value.substring(7, 9)}`;
        if (value.length >= 10) formatted += `-${value.substring(9, 11)}`;

        const prevLength = input.value.length;
        input.value = formatted;

        const nextLength = input.value.length;
        const diff = nextLength - prevLength;

        if (cursorPosition) {
            input.selectionStart = input.selectionEnd = cursorPosition + diff;
        }
    });

    input.addEventListener('blur', () => {
        if (input.value === '+7') {
            input.value = '';
        }
    });
}
