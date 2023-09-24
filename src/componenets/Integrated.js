import React from 'react'
import process from '../images/process.jpg'

const Integrated = () => {
  return (
   
        <div className=' w-full'>
    <div className='md:mx-20 mx-2 py-12 md:py-16 md:flex  space-x-0 md:space-x-5  '>

     <div className=''>
            <img className='h-[400px]' src={process}/>
        </div> 


        <div className='flex-col w-full md:w-[65%] mb-12 md:mb-0  space-y-8'>
            <p className='text-3xl md:text-5xl font-bold' > Joblient Integrated System</p>
            <p className='text-lg '>
            This system provides users with a one-stop shop for all their job search needs, including resources for preparing for interviews,
             creating resumes, and applying for jobs .
            </p>
            <p className='text-lg  text-violet-500'>It also provides a platform for recruiters and interviewers to post jobs, review resumes, and conduct interviews with potential candidates, and 
                receive personalized guidance from experts .</p>
            <p className='text-lg  text-green-700'>It is designed to help job seekers quickly find the perfect job 
            opportunity and make the most of any interview ..</p>

            <div><button className='bg-yellow-500 text-black px-6 py-3 text-2xl font-bold '>LEARN MORE</button></div>
        </div>
           
    </div>
   
    </div>
    
  )
}

export default Integrated