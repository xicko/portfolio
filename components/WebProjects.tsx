import React from 'react'
import WebShowcase from './WebShowcase'

const projects = [
    {
        imageUrl: '/web/arfx.webp',
        label: 'ARFX - Mock AR Agency',
        link: '/project1',
    },
    {
        imageUrl: '/web/dashnyam.webp',
        label: 'Dashnyam Personal Web',
        link: '/project2',
    },
    {
        imageUrl: '/web/inxta.webp',
        label: 'Inxta, a modified Instagram client',
        link: '/project2',
    },
    // Add more projects as needed
];

const WebProjects = () => {
  return (
    <section className='flex justify-center md:mx-10 mx-6'>
        <div className='bg-[#282E44] bg-opacity-35 rounded-2xl w-fit h-[10%] overflow-hidden'>
            <WebShowcase items={projects}/>
        </div>
    </section>
  )
}

export default WebProjects