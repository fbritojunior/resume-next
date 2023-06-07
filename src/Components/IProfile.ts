{/*export interface IProfile {
    description: IDescription[];
}

interface IDescription {
    type: string,
    title: string,
    content: string,
    icon: string
}*/}

export interface IProfile {
  itemsprofile: {
    type: string,
    icon: string,
    title: string,
    content: string
  };
}
