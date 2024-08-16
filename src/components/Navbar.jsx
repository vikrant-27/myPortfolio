import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

export const Navbar = () => {
  return (

    <>
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center text-4xl logoText'>
            Vr.
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl cursor-pointer'>
        <FaLinkedin/>
        <FaGithub/>
        <FaSquareXTwitter/>
        <FaInstagram/>
        </div>
    </nav>
    </>
    
  )
}


// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// export default Navbar