import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex md:justify-between md:flex-row flex-col-reverse md:mx-20 mt-8 md:px-20 px-8 md:mb-0 mb-10'>
        <div className='md:text-left text-center'>
            <p>Made with ♥ by Dashnyam<br></br>
            Built with NextJS</p>
        </div>

        <div className='md:text-right text-center md:mb-0 mb-4'>
            <p><Link href='tel:+61435444282'>+61 435 444 282</Link><br></br>
            <Link href='mailto:hello@dashnyam.com'>hello@dashnyam.com</Link></p>
        </div>
    </footer>
  )
}

export default Footer