import React from 'react'
import WebShowcase from './WebShowcase'

const projects = [
    {
        imageUrl: '/web/arfx.webp',
        label: 'ARFX - Mock AR Agency',
        link: './web/ARFX',
    },
    {
        imageUrl: '/web/dashnyam.webp',
        label: 'Dashnyam Personal Web',
        link: './web/Dashnyam',
    },
    {
        imageUrl: '/web/inxta.webp',
        label: 'Inxta, a modified Instagram client',
        link: './web/Inxta',
    },
    // Add more projects as needed
];

const WebProjects = () => {
  return (
    <section className='flex justify-center md:mx-10 mx-6'>
        <div className='bg-[#585858] bg-opacity-20 rounded-2xl w-fit h-[10%] overflow-hidden'>
            <WebShowcase items={projects}/>
        </div>
    </section>
  )
}

export default WebProjects