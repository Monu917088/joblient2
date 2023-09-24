import React from 'react'
import hiring from '../images/hiring.jpg'

const SmartHiring = () => {
  return (
    <div><div className='bg-gray-200 w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>
        <div className='flex-col w-full md:w-[65%] mb-12 md:mb-0  space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' > Smart Hiring System</p>
            <p className='text-lg '>
            A Smart Hiring System uses algorithms to assess job applicants and predict their potential for success in the role .
            </p>
            <p className='text-lg  text-violet-500'>It looks at factors such as previous experience, qualifications, skills, and performance in interviews to
             make an informed decision on who to hire .</p>
            <p className='text-lg  text-green-700'>It is designed to save time and money by streamlining the recruitment process, giving employers access to a larger pool of potential applicants, and providing customizable reporting
             tools to help employers make data-driven decisions .</p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
         <div className=''>
            <img className='h-[400px]' src={hiring}/>
        </div>   
    </div>
   
    </div></div>
  )
}

export default SmartHiring