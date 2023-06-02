import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const iconMap = {
    email: faEnvelope,
    phone: faPhone,
    location: faMapMarkerAlt,
    website: faGlobeAmericas,
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter
};

function ContactList(props: any) {
    //console.log(props.items);
    return (
        <div className={''}>
            {props.items.map((item) => {
                const icon = iconMap[item.type] || faExclamation;
                return <div className={''}>
                    <FontAwesomeIcon icon={icon} className={'w-8'} />
                    <a className={''} href={item.value} target='_blank'>
                        {item.value}
                    </a>
                </div>
            })}
        </div>
    )
}

interface IComponentProps {
    name: string,
    title: string,
    contacts: {},
    image: string,
};

export default function Profile(props: IComponentProps) {

    return (
        <div className='flex flex-wrap'>
            <div>
                <figure className={'w-128 h-128'}>
                    <img className={'rounded-lg'} src={props.image} />
                </figure>
            </div>
            <div className={'flex items-center'}>
                <h1 className={'text-white text-lg'}>{props.name}</h1>
                <h3 className={'text-white text-sm'}>{props.title}</h3>
            </div>
            <div className={'level-right'}>
                <div className={'level-item'}>
                    <ContactList
                        items={props.contacts}
                    />
                </div>
            </div>
        </div>
    );
}

