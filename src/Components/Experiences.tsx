import React from "react";
import { IExperiences, IList } from "./IExperiences";


function ExperienceList(props: { listitems: IList[] }) {
    return (
        <div className={''}>
            {Array.isArray(props.listitems) && props.listitems.map((item, index) => (
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

                            {item.descriptionTags.map((element, innerIndex) =>  (
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
            {Array.isArray(props.listexperiences) && props.listexperiences.map((e, index) => (
                    <div key={index}>
                        <div className='inline-block text-left '>
                            <ExperienceList
                                listitems={e.items}
                            />
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
