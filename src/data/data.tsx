export const data = {
    personal: {
        name: 'Francisco Brito Jr',
        title: 'Software Developer',
        description: 'I am passionate about developing solutions. I love working in a challenging and continuously learning environment.',
        image: '/photo.jpg',
        contacts: [
            { type: 'email', value: 'fbritojnr@gmail.com', link: 'mailto:' },
            { type: 'phone', value: '+55 (85) 99960-3519', link: 'tel:' },
            { type: 'location', value: 'Fortaleza - CE, Brasil', link: 'http://maps.google.com/?q' },
            { type: 'website', value: 'fbritojunior.github.io', link: 'https://' },
            { type: 'linkedin', value: 'linkedin.com/in/fbritojunior', link: 'https://www.' },
            { type: 'github', value: 'github.com/fbritojunior', link: 'https://www.' }
        ]
    },
    sections: [{
        profile:
        {
            type: 'profile',
            title: 'Profile',
            content: 'I am passionate about developing solutions. I love working in a challenging and continuously learning environment.',
            icon: 'usertie'
        },
        education:
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'Electrical Engineering (MSc)',
                    authority: 'Federal University of Ceará',
                    authorityWebSite: 'https://www.ufc.br',
                    rightSide: '2011 - 2013'
                },
                {
                    title: 'Industrial Automation (BTech)',
                    authority: 'Federal Institute of Ceará',
                    authorityWebSite: 'https://www.ifce.edu.br',
                    rightSide: '2007 - 2010'
                }
            ]
        },
        experiences:
        {
            type: 'experiences-list',
            title: 'Experiences',
            description: 'Optional',
            icon: 'archive',
            items: [
                {
                    title: 'Software Developer',
                    company: 'Escola de Saúde Pública',
                    description: 'I\'m working as a lead developer yeeeey!',
                    companyWebSite: 'http://www.esp.ce.gov.br',
                    companyMeta: '',
                    datesBetween: '07/2022 - Present',
                    descriptionTags: ['Javascript', 'D3.JS', 'Wordpress']
                },
                {
                    title: 'Software Maintenance Analyst',
                    company: 'Companhia Siderúrgica do Pecém',
                    description: 'I\'m using ReactJS and working as a front-end developer',
                    companyWebSite: 'http://www.cspecem.com/',
                    companyMeta: '',
                    datesBetween: '02/2021 - 02/2022',
                    descriptionTags: ['Javascript', 'C#', 'Oracle']
                }
            ]
        },
        projects:
        {
            type: 'projects-list',
            title: 'Projects',
            description: 'Optional',
            icon: 'tasks',
            groups: [
                {
                    sectionHeader: 'Escola de Saúde Pública',
                    description: 'Optional',
                    items: [
                        { title: 'ObsevaEPS', projectUrl: 'https://observatorio.esp.ce.gov.br/', description: 'Optional' }
                    ]
                }
            ]
        },
        conference:
        {
            type: 'common-list',
            title: 'Conferences & Certificates',
            description: '',
            icon: 'comments',
            items: [
                {
                    title: 'Some Conferences / 2019',
                    authority: 'SomeConf',
                    authorityWebSite: 'https://www.someconf.somesome'
                },
                {
                    title: 'Some Conferences / 2019',
                    authority: 'SomeConf',
                    authorityMeta: 'Speaker',
                    authorityWebSite: 'https://www.someconf.somesome',
                    rightSide: 'test'
                },
                {
                    title: 'Some Conferences / 2012',
                    authorityMeta: 'Speaker'
                }
            ]
        },
        languages:
        {
            type: 'common-list',
            title: 'Languages',
            icon: 'language',
            items: [
                {
                    authority: 'Portuguese',
                    authorityMeta: 'Native'
                },
                {
                    authority: 'English',
                    authorityMeta: 'Intermediate'
                }
            ]
        },
        skills:
        {
            type: 'tag-list',
            title: 'Skills Proficiency',
            icon: 'rocket',
            items: ['React', 'JavaScript', 'CSS', 'SQL', 'TypeScript', 'Next.Js']
        },
        hobbies:
        {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: ['Photography', 'Poetry']
        }
    }]
}
