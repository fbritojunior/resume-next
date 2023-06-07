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
    //console.log(props.itemsprofile);
    return (
        <div className=' flex justify-start items-center'>
            {Array.isArray(props.itemsprofile) && props.itemsprofile.map((item, index) => {
                //const icon = (preIcon as Record<string, IconDefinition>)[item.icon];
                return (
                    <div key={index}>
                        <div className='inline-block text-left '>
                            {/*<figure className='rounded-full items-center justify-center bg-blue-700 w-8 h-8'>
                                <FontAwesomeIcon icon={icon} className={'inline w-4'} />
                            </figure>*/}
                            <div className='text-white font-semibold text-lg'>
                                {item.title}
                            </div>
                        <div className=' text-sm p-3'>
                                {item.content}
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
