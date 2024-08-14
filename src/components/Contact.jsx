import React from 'react'
import { CONTACT } from '../constants'
import{motion} from 'framer-motion'

export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <div className='my-10 text-center text-4xl'>
      <motion.h1  
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y:-100}}
        transition={{duration:0.9}}
        className='my-10 text-center text-4xl'>Get In Touch</motion.h1>
        <div className='text-center tracking-tighter text-sm'>
          <motion.p whileInView={{opacity:1 , x:0}}
                    initial={{opacity:0 , x:-100}}
                    transition={{duration:1}} 
                    className='my-4'>{CONTACT.address}</motion.p>
          <motion.p whileInView={{opacity:1 , x:0}}
                    initial={{opacity:0 , x:100}}
                    transition={{duration:1}} 
                    className='my-4'>{CONTACT.phoneNo}</motion.p>
          <a href="#">{CONTACT.email}</a>
        </div>
      </div>
    </div>
  )
}
