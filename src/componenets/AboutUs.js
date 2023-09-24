import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-gray-300  py-4'>
        <p className='text-3xl md:text-6xl text-center mb-6 text-blue-700 font-bold'>A lil bit about us</p>
        <p className='md:mx-20 mx-2 mb-2 text-[16px] text-justify'>
        Our platform offers employers a more efficient way to assess candidates. It eliminates the need to manually read through resumes and conduct many interviews to gauge a candidate's capabilities. Instead, employers can use our platform to assess candidates by simulating the tasks associated with the job role and looking at the performance of the candidate in those tasks. This allows employers to make decisions based on a candidate's actual skills rather
         than relying on traditional methods which may be more subjective.
        </p>
        <p className='md:mx-20 mx-2 mb-2 text-[16px] text-justify'>Joblient's model of ranking candidates takes into account not only how frequently they update their profiles, but also how actively they have participated in assessments and learning activities. This is beneficial for recruiters as it allows them to easily
             pick out the most qualified candidates for further interviewing.
        </p>
        <p  className='md:mx-20 mx-2 mb-2 text-[16px] text-justify'>
        Joblient's assessment and learning based model helps recruiters to identify the most qualified candidates by considering factors such as the candidate's engagement level on the platform, their performance on assessments, and their willingness to participate in learning activities. Thus, recruiters can easily identify higher-ranking
         candidates and conduct more tailored interviews.
        </p>
    
    </div>
  )
}

export default AboutUs