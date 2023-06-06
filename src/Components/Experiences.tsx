import React from "react";
import { IExperiences } from "./IExperiences";


function ExperienceList(props: { listitems: { datesBetween: string; title: string; companyWebSite: string; company: string; description: string; descriptionTags: any[]; }[]; }) {
    return (
        <div className={''}>
            {props.listitems.map((item: { datesBetween: string; title: string; companyWebSite: string; company: string; description: string; descriptionTags: any[]; }, index: number) => (
                    <div className={'flex'} key={index}>
                        <div className="px-12">
                            {item.datesBetween}
                        </div>
                        <div>
                            <span className="">{item.title}</span>
                            <a className={'inline px-2 py-1 text-sm'} href={item.companyWebSite} target='_blank'>
                                <span>{item.company}</span>
                            </a>
                            <div>{item.description}</div>

                            {item.descriptionTags.map((element: string, innerIndex: number) =>  (
                                    <span key={innerIndex}>{element}</span>
                                )
                            )}
                        </div>
                    </div>
                )
            )}
        </div>
    )
}


export default function Experiences(props: IExperiences) {
    return (
        <div className=' flex justify-start items-center'>
            {props.experiences.map((e, index) => {
                {/*const icon = (preIcon as Record<string, IconDefinition>)[d.icon];*/ }
                return (
                    <div key={index}>
                        <div className='inline-block text-left '>
                            {/*<figure className='rounded-full items-center justify-center bg-blue-700 w-8 h-8'>
                                <FontAwesomeIcon icon={icon} className={'inline w-4'} />
                            </figure>*/}
                            <ExperienceList
                                listitems={e.items}
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
