import React from 'react'
import WebShowcase from './WebShowcase'
import ARShowcase from './ARShowcase';

const projects = [
    {
        imageUrl: '/thumbnails/webp/burgerking.webp',
        label: 'This or That - Burger King',
        link: '/AR/ThisOrThat',
    },
    {
        imageUrl: '/thumbnails/webp/lightninghalo.webp',
        label: 'Lightning Halo',
        link: '/project2',
    },
    {
        imageUrl: '/thumbnails/webp/unitel.webp',
        label: 'Unitel Green Dot',
        link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/whynaadam.webp',
      label: 'WhyNaadam',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/devsummit.webp',
      label: 'DevSummit 2022',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/koreanfood.webp',
      label: 'Korean Food',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/hanbok.webp',
      label: 'Hanbok',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/tengri.webp',
      label: 'Tengri',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/haayachgesen.webp',
      label: 'Haaya ch gesen',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/nextgroup.webp',
      label: 'Next Group',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/christmashat.webp',
      label: 'Christmas Hat',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/xickomode.webp',
      label: 'XICKO MODE',
      link: '/project2',
    },
    {
      imageUrl: '/thumbnails/webp/blindinglights.webp',
      label: 'Blinding Lights',
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