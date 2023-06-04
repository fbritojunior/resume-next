import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Icon, IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBook, faGraduationCap, faArchive, faRocket, faTasks, faComment, faLanguage, faCubes, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { IProfile } from './IProfile';


const preIcon = {
    usertie: faUserTie
}

export default function Profile(props: IProfile) {
    //console.log(props.description);
    return (
        <div className='w-full max-w-5xl'>
            {props.description.map((d) => {
                const icon = (preIcon as Record<string, IconDefinition>)[d.icon];
                return (
                    <div>
                        <div className='inline-block items-center justify-center '>
                            <figure className='rounded-full items-center justify-center bg-blue-700 w-8 h-8'>
                                <FontAwesomeIcon icon={icon} className={'inline w-4'} />
                            </figure>
                            <div className='text-black text-lg'>
                                {d.title}
                            </div>
                        </div>
                        <div className='text-black text-sm p-3'>
                            {d.content}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
