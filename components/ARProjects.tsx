import React from 'react'
import WebShowcase from './WebShowcase'
import ARShowcase from './ARShowcase';

const projects = [
    {
        imageUrl: '/thumbnails/webp/burgerking.webp',
        label: 'This or That - Burger King',
        link: './ar/burgerking1',
    },
    {
        imageUrl: '/thumbnails/webp/lightninghalo.webp',
        label: 'Lightning Halo',
        link: './ar/lightninghalo',
    },
    {
        imageUrl: '/thumbnails/webp/unitel.webp',
        label: 'Unitel Green Dot',
        link: './ar/unitel',
    },
    {
      imageUrl: '/thumbnails/webp/whynaadam.webp',
      label: 'WhyNaadam',
      link: './ar/whynaadam',
    },
    {
      imageUrl: '/thumbnails/webp/devsummit.webp',
      label: 'DevSummit 2022',
      link: './ar/devsummit',
    },
    {
      imageUrl: '/thumbnails/webp/koreanfood.webp',
      label: 'Korean Food',
      link: './ar/koreanfood',
    },
    {
      imageUrl: '/thumbnails/webp/hanbok.webp',
      label: 'Hanbok',
      link: './ar/hanbok',
    },
    {
      imageUrl: '/thumbnails/webp/tengri.webp',
      label: 'Tengri',
      link: './ar/tengri',
    },
    {
      imageUrl: '/thumbnails/webp/haayachgesen.webp',
      label: 'Haaya ch gesen',
      link: './ar/haayachgesen',
    },
    {
      imageUrl: '/thumbnails/webp/nextgroup.webp',
      label: 'Next Group',
      link: './ar/nextgroup',
    },
    {
      imageUrl: '/thumbnails/webp/christmashat.webp',
      label: 'Christmas Hat',
      link: './ar/christmashat',
    },
    {
      imageUrl: '/thumbnails/webp/xickomode.webp',
      label: 'XICKO MODE',
      link: './ar/xickomode',
    },
    {
      imageUrl: '/thumbnails/webp/blindinglights.webp',
      label: 'Blinding Lights',
      link: './ar/blindinglights',
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