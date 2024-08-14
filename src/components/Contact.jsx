import React from 'react'
import { CONTACT } from '../constants'

export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <div className='my-10 text-center text-4xl'>
        <h1>Get In Touch</h1>
        <div className='text-center tracking-tighter text-sm'>
          <p className='my-4'>{CONTACT.address}</p>
          <p className='my-4'>{CONTACT.phoneNo}</p>
          <a href="#">{CONTACT.email}</a>
        </div>
      </div>
    </div>
  )
}
