import React from 'react'
import design from '../images/design.png'

const SystemDesign = () => {
  return (
    <div className=' bg-gray-200 w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>
        <div className='flex-col w-full md:w-[65%] mb-12 md:mb-0  space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' > Joblient Advanced System Design</p>
            <p className='text-lg '>
            This course is designed to help you develop a strong foundation in design principles and practices, allowing you to create designs with clarity and purpose. You will learn to analyze and solve design problems, create effective system and workflows, and be able to
             communicate your design decisions to stakeholders.
            </p>
            

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
         <div className=''>
            <img className='h-[400px]' src={design}/>
        </div>   
    </div>
   
    </div>
  )
}

export default SystemDesign