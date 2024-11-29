export function validateValues(cardNode, name, vacancy, phone) {
    const result = {
        status: true,
        message: '',
    };

    if (!name || !vacancy || !phone) {
        result.status = false;
        result.message = 'All fields are required!';
    }

    if (!cardNode) {
        result.status = false;
        result.message = 'No card for this letter!';
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
        result.status = false;
        result.message = 'Invalid phone format! Use +7 (XXX) XXX-XX-XX';
        return result;
    }

    return result;
}
