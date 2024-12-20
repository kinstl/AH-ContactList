import { getContactsFromLocalStorage } from '../data/localStorage';
import type { ContactsData, IContact } from '../types/contact';
import type { IValidationResult } from '../types/validationResult';

function validate(
    cardNode: HTMLDivElement | undefined,
    name: string,
    vacancy: string,
    phone: string,
    isEditing: boolean,
    currentPhone: string,
): IValidationResult {
    const result: IValidationResult = {
        status: true,
        message: '',
    };

    if (!name || !vacancy || !phone) {
        result.status = false;
        result.message = 'All fields are required!';
        return result;
    }

    const numberRegex = /\d/;
    if (numberRegex.test(name)) {
        result.status = false;
        result.message = 'Name must not contain numbers!';
        return result;
    }

    if (numberRegex.test(vacancy)) {
        result.status = false;
        result.message = 'Vacancy must not contain numbers!';
        return result;
    }

    if (!cardNode) {
        result.status = false;
        result.message = 'No card for this letter!';
        return result;
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
        result.status = false;
        result.message = 'Invalid phone format! Use +7 (XXX) XXX-XX-XX';
        return result;
    }

    if (!isEditing || phone !== currentPhone) {
        const contactsData: ContactsData = getContactsFromLocalStorage();

        for (const contacts of Object.values(contactsData)) {
            if (contacts.some((contact: IContact) => contact.phone === phone)) {
                result.status = false;
                result.message =
                    'A contact with this phone number already exists!';
                return result;
            }
        }
    }

    return result;
}

export function handleValidation(
    cardNode: HTMLDivElement | undefined,
    contact: IContact,
    isEditing: boolean = false,
    currentPhone: string = '',
) {
    const { name, vacancy, phone } = contact;

    const validationResult = validate(
        cardNode,
        name,
        vacancy,
        phone,
        isEditing,
        currentPhone,
    );

    if (!validationResult.status) {
        alert(validationResult.message);
        return false;
    } else {
        return true;
    }
}
