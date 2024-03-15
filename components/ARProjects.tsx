import React from 'react'
import WebShowcase from './WebShowcase'
import ARShowcase from './ARShowcase';

const projects = [
    {
        imageUrl: '/thumbnails/webp/unitel.webp',
        label: 'Unitel Green Dot',
        link: '/project1',
    },
    {
        imageUrl: '/thumbnails/webp/nextgroup.webp',
        label: 'Next Group',
        link: '/project2',
    },
    {
        imageUrl: '/thumbnails/webp/lightninghalo.webp',
        label: 'Lightning Halo',
        link: '/project2',
    },
    // Add more projects as needed
];

const ARProjects = () => {
  return (
    <section className='flex justify-center md:mx-10 mx-6'>
        <div className='bg-[#172a36] bg-opacity-20 rounded-2xl w-fit h-[10%] overflow-hidden'>
            <ARShowcase items={projects}/>
        </div>
    </section>
  )
}

export default ARProjects