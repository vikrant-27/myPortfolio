import React from 'react'
import {PROJECTS} from '../constants'

export const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4' >
        <h1 className='my-20 text-center text-4xl'>Projects</h1>

        <div>
            {PROJECTS.map((Project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full lg:w-1/4'>
                    <img src={Project.image} width={150} height={150} alt={Project.title} className='mb-6 rounded' />    
                    </div>  
                    <div className='w-full max-w-xl lg:w-3/4'></div>             
                </div>
            ))}

        </div>
    </div>
  )
}
