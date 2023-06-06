import React from 'react';
import Image from 'next/image';
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

function ContactList(props: { items: { type: string; value: string; link: string; }[]; }) {
    return (
        <div className={''}>
            {props.items.map((item: { type: string; value: string; link: string; }, index: number) => {
                const icon = (iconMap as Record<string, IconDefinition | undefined>)[item.type] || faExclamation;
                return (
                    <div className={'flex'} key={index}>
                        <a className={'inline px-2 py-1 text-sm'} href={item.link + item.value} target='_blank'>
                            <FontAwesomeIcon icon={icon} className={'inline w-5'} />{/*{item.value}*/}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}


export default function Header(props: IHeader) {

    return (
        <div className='flex  items-center'>
            <Image
                className={'rounded-full'}
                src={props.image}
                height={156}
                width={156}
                alt={''}
            />
            <div className={'block items-center p-6'}>
                <h1 className={'text-white text-4xl font-bold'}>{props.name}</h1>
                <h3 className={'text-white text-sm'}>{props.title}</h3>
                <p className='text-teal-400 text-sm'>{props.description}</p>
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
