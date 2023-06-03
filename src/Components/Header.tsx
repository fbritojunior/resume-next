import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IHeader } from './IHeader';

const iconMap = {
    email: faEnvelope,
    phone: faPhone,
    location: faMapMarkerAlt,
    website: faGlobeAmericas,
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter
};

function ContactList(props: { items: { type: string; value: string | undefined; link: any; }[]; }) {
    return (
        <div className={''}>
            {props.items.map((item: { type: string; link: any; value: string | undefined; }) => {
                const icon = (iconMap as Record<string, IconDefinition | undefined>)[item.type] || faExclamation;
                return <div className={'flex'}>
                    <FontAwesomeIcon icon={icon} className={'inline w-4'} />
                    <a className={'inline p-2 text-sm'} href={item.link + item.value} target='_blank'>
                        {item.value}
                    </a>
                </div>
            })}
        </div>
    )
}


export default function Header(props: IHeader) {

    return (
        <div className='flex  items-center'>
            <div>
                <figure className={'w-256 h-256 p-6'}>
                    <img className={'rounded-full'} src={props.image} />
                </figure>
            </div>
            <div className={'block items-center p-6'}>
                <h1 className={'text-white text-3xl font-bold'}>{props.name}</h1>
                <h3 className={'text-white text-sm'}>{props.title}</h3>
            </div>
            <div className={''}>
                <div className={'flex p-6 justify-end'}>
                    <ContactList
                        items={props.contacts}
                    />
                </div>
            </div>
        </div>
    );
}
