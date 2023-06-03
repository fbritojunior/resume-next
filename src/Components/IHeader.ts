export interface IHeader {
    name: string,
    title: string,
    contacts: Array<IContacts>,
    image: string,
};

interface IContacts {
    type: string,
    value: string,
    link: string
};