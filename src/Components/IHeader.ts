export interface IHeader {
    image: string,
    name: string,
    title: string,
    description: string,
    contacts: Array<IContacts>
};

interface IContacts {
    type: string,
    value: string,
    link: string
};