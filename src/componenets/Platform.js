import React from 'react'
import interview from '../images/interview.jpg'

const Platform = () => {
  return (
    <div className=' w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>
        <div className='flex-col w-full md:w-[65%] mb-12 md:mb-0  space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' >Platform For
Candidate, Recruiters, Interviewer </p>
            <p className='text-lg '>
            The most reliable platform for recruiter to get technically pre-assessed, immediate joiners, within budget.

By upskilling, a candidate becomes eligible to be included on pre-assessed category and increases their chances of being selected for the role..
            </p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
         <div className=''>
            <img src={interview}/>
        </div>   
    </div>
    <p className='text-2xl text-center text-blue-500 mb-10 font-bold' >Joblient is the bridge between candidate and recruiter
</p>
    </div>
   
  )
}

export default Platform