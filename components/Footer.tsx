import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    
    <footer className='flex justify-center  md:mt-10'>
      <div className='md:w-[1244px] flex md:justify-between md:flex-row  flex-col-reverse md:mx-0 mt-8 md:px-0 px-8 md:mb-20 mb-10 customfont'>
        <div className='md:text-left md:text-xl text-lg text-center'>
            <p>Made with ♥ by Dashnyam<br></br>
            Built with NextJS</p>
        </div>

        <div className='md:text-right md:text-xl text-lg text-center md:mb-0 mb-4'>
            <p><Link href='tel:+61435444282'>+61 435 444 282</Link><br></br>
            <Link href='mailto:hello@dashnyam.com'>hello@dashnyam.com</Link></p>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer