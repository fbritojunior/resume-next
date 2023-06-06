export interface IProfile {
    description: Array<IDescription>;
}

interface IDescription {
    type: string,
    title: string,
    content?: string,
    icon: string
}