export interface IExperiences {
    experiences: Array<IItems>
}

interface IItems  {
    type: string,
    title: string,
    description?: undefined ,
    icon: string,
    items: Array<IList>
}

interface IList {
    title: string,
    company: string,
    description: string,
    companyWebSite: string,
    companyMeta: string,
    datesBetween: string,
    descriptionTags: Array<[]>
};