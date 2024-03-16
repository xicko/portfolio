import React from 'react'
import WebShowcase from './WebShowcase'
import ARShowcase from './ARShowcase';

const projects = [
    {
        imageUrl: '/thumbnails/webp/burgerking.webp',
        label: 'This or That - Burger King',
        link: './burger-king-mongolia',
    },
    {
        imageUrl: '/thumbnails/webp/lightninghalo.webp',
        label: 'Lightning Halo',
        link: './lightning-halo',
    },
    {
        imageUrl: '/thumbnails/webp/unitel.webp',
        label: 'Unitel Green Dot',
        link: './unitel',
    },
    {
      imageUrl: '/thumbnails/webp/whynaadam.webp',
      label: 'WhyNaadam',
      link: './whynaadam',
    },
    {
      imageUrl: '/thumbnails/webp/devsummit.webp',
      label: 'DevSummit 2022',
      link: './devsummit',
    },
    {
      imageUrl: '/thumbnails/webp/koreanfood.webp',
      label: 'Korean Food',
      link: './koreanfood',
    },
    {
      imageUrl: '/thumbnails/webp/hanbok.webp',
      label: 'Hanbok',
      link: './hanbok',
    },
    {
      imageUrl: '/thumbnails/webp/tengri.webp',
      label: 'Tengri',
      link: './tengri',
    },
    {
      imageUrl: '/thumbnails/webp/haayachgesen.webp',
      label: 'Haaya ch gesen',
      link: './haayachgesen',
    },
    {
      imageUrl: '/thumbnails/webp/nextgroup.webp',
      label: 'Next Group',
      link: './nextgroup',
    },
    {
      imageUrl: '/thumbnails/webp/christmashat.webp',
      label: 'Christmas Hat',
      link: './christmashat',
    },
    {
      imageUrl: '/thumbnails/webp/xickomode.webp',
      label: 'XICKO MODE',
      link: './xickomode',
    },
    {
      imageUrl: '/thumbnails/webp/blindinglights.webp',
      label: 'Blinding Lights',
      link: './blindinglights',
    },
    // Add more projects as needed
];

const ARProjects = () => {
  return (
    <section className='flex justify-center md:mx-10 mx-6'>
        <div className='bg-[#172a36] bg-opacity-20 rounded-2xl w-fit h-[10%] overflow-hidden'>
            <ARShowcase items={projects} />
        </div>
    </section>
  )
}

export default ARProjects