import React from 'react'
import test from '../images/test.png'

const SideBar = (props) => {
    const sideBar=props.sideBar;
    console.log(sideBar)
  return (
    <div className={`  w-[180px] sticky overflow-hidden border-r border-b border-gray-400 ${sideBar ?'block':'hidden'}`}>
        <ul className='text-xl md:text-2xl py-2 text-black  leading-9'>
            <li className=' border-y px-2 md:px-3 py-2 border-gray-200'>Test</li>
            <li className=' border-b px-2 md:px-3  py-2 border-gray-200'>Learn</li>
            <li className=' border-b md:px-3 px-2 py-2 border-gray-200'>Practice</li>
            <li className=' border-b md:px-3 px-2 py-2 border-gray-200'>Interview</li>
            <li className=' border-b md:px-3 px-2 py-2 border-gray-200'>Design</li>
            <li className=' border-b md:px-3 px-2 py-2 border-gray-200'>Links</li>
            <li className=' border-b md:px-3 px-2 py-2 border-gray-200'>Courses</li>
            <li className=' border-b md:px-3 px-2 py-2 border-gray-200'>Feedback</li>
            <li className='  px-3 py-2 '>Contact Us</li>
        </ul>
    </div>
  )
}

export default SideBar