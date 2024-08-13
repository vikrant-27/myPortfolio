import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { SiPython } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { FaAws } from "react-icons/fa";

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-25'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPython className='text-7xl text-sky-600'  />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoDjango className='text-7xl text-green-600' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoTailwindCss className='text-7xl text-cyan-500' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiSqllite className='text-7xl text-purple-400' />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-7xl text-orange-400' />
            </div>

        </div>
        
    </div>
  )
}
