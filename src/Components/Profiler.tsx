import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMap = {
    email: faEnvelope,
    phone: faPhone,
    location: faMapMarkerAlt,
    website: faGlobeAmericas,
    linkedin: faLinkedin, 
    github: faGithub,
    twitter: faTwitter
};

function ContactList(props: { items: { type: string; value: string | undefined; link: any; }[]; } ) {
    return (
        <div className={''}>
            { props.items.map((item: { type: string; link: any; value: string | undefined; }) => {
                const icon = (iconMap as Record<string, IconDefinition | undefined>)[item.type] || faExclamation;
                return <div className={''}>
                    <FontAwesomeIcon icon={icon} className={'w-6'} />
                    <a className={''} href={item.link + item.value} target='_blank'>
                        {item.value}
                    </a>
                </div>
            })}
        </div>
    )
}

interface IProfile {
    name: string,
    title: string,
    contacts: Array<IContacts>,
    image: string,
};

interface IContacts {
    type: string,
    value: string,
    link: string
;}

export default function Profile(props: IProfile) {

    return (
        <div className='flex flex-wrap'>
            <div>
                <figure className={'w-128 h-128'}>
                    <img className={'rounded-full'} src={props.image} />
                </figure>
            </div>
            <div className={'flex items-center'}>
                <h1 className={'text-white text-lg'}>{props.name}</h1>
                <h3 className={'text-white text-sm'}>{props.title}</h3>
            </div>
            <div className={'level-right'}>
                <div className={'level-item'}>
                    <ContactList
                        items = {props.contacts}
                    />
                </div>
            </div>
        </div>
    );
}

