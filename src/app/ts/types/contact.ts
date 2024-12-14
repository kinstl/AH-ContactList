export interface IContact {
    id: string | undefined;
    name: string;
    vacancy: string;
    phone: string;
}

export type ContactsData = Record<string, IContact[]>;
