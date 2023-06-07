import Image from 'next/image'
import React from 'react';
import { data } from '../data/data';
import Header from '@/Components/Header';
import Profile from '@/Components/Profile';
import Experiences from '@/Components/Experiences';


export default function Home() {
    //console.log(data.sections[0].profile) 
    return (
        <main className="flex h-screen flex-col bg-slate-950 items-center justify-center p-12">
            <div className="w-full max-w-6xl items-center justify-between rounded-2xl font-mono border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <Header
                    image={data.personal.image}
                    name={data.personal.name}
                    title={data.personal.title}
                    contacts={data.personal.contacts}
                    description={data.personal.description}
                />
            </div>
            <section className='w-full max-w-6xl py-12'>
                <Profile
                    itemsprofile = {data.about} //filter(i => i.type === 'profile')
                />
            </section>
            <section className='w-full max-w-6xl py-12'>
                <Experiences
                    listexperiences = {data.experiences} //filter(i => i.type === 'experiences-list')
                />
            </section>
            
            {/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <code className="font-mono font-bold">src/app/page.tsx</code>
            </p>*/}
            <footer className='h-10 '>
                <span className='text-sm'>Coded in <a className='text-teal-600 font-semibold' href="https://code.visualstudio.com/">Visual Studio Code</a>, built with <a className='text-teal-600 font-semibold' href="https://nextjs.org/">Next.js</a> and <a className='text-teal-600 font-semibold' href='https://tailwindcss.com/'>Tailwind CSS</a> and deployed with <a className='text-teal-600 font-semibold' href='https://vercel.com/'>Vercel</a>.</span>
            </footer>
        </main>
    )
}
