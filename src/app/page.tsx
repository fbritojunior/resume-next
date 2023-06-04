//import Image from 'next/image'
import React from 'react';
import { data } from '../data/data';
import Header from '@/Components/Header';
import Profile from '@/Components/Profile';


export default function Home() {
    

    return (
        <main className="flex min-h-screen flex-col bg-white items-center justify-between p-12">
            <div className="w-full max-w-5xl items-center justify-between rounded-lg font-mono bg-emerald-500 text-sm lg:flex">
                <Header
                    name={data.personal.name}
                    title={data.personal.title}
                    contacts={data.personal.contacts}
                    image={data.personal.image}
                />
            </div>
            <Profile
                description={data.sections.filter(item => item.type === 'profile')}
            />
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <code className="font-mono font-bold">src/app/page.tsx</code>
            </p>
        </main>
    )
}
