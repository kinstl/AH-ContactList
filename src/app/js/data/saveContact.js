import {
    getContactsFromLocalStorage,
    saveContactsToLocalStorage,
} from './localStorage';

export function saveContact(contactId, name, vacancy, phone) {
    const firstLetter = name.charAt(0).toLowerCase(); // Определяем букву карточки
    const contactsData = getContactsFromLocalStorage();

    // Инициализация массива для буквы, если его нет
    if (!contactsData[firstLetter]) {
        contactsData[firstLetter] = [];
    }

    // Добавление контакта
    contactsData[firstLetter].push({ id: contactId, name, vacancy, phone });

    // Сохранение в localStorage
    saveContactsToLocalStorage(contactsData);
}
