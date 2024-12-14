export const normalizePhone = (phone: string): string =>
    phone.replace(/\D/g, '');
