
import React from 'react'
import ContactForm from './ContactForm'
import Link from 'next/link'

export default function Footer() {
    const year = new Date().getFullYear()   
  return (
    <div className='p-5 lg:p-10 bg-gray-50 border-t w-full' id="footer">
        <div className='flex  lg:items-center justify-between w-full flex-col lg:flex-row'>

        <div className='flex flex-col gap-5'>
        <Link href="/" className='font-semibold text-2xl'>Zunnurain</Link>
            <span className='font-semibold text-xl'>
                Any Questions?
                </span>
                <span className='text-lg'>Feel free to ask me. Please fill in the form.</span>

        </div>
        <ContactForm />
        </div>

        <p className='text-sm'>Copyright © {year} All rights reserved</p>
    </div>
  )
}
