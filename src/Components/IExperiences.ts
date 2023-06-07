{/*export interface IExperiences {
    type: string,
    title: string,
    description: string,
    icon: string,
    listexperiences: {
        items: Array<IList>
    }[]
}*/}

export interface IList {
    title: string,
    company: string,
    description: string,
    companyWebSite: string,
    companyMeta: string,
    datesBetween: string,
    descriptionTags: string[]
};

export interface IExperiences {
  listexperiences: {
    type: string;
    title: string;
    description: string;
    icon: string;
    items: 
      IList[];
  };
}