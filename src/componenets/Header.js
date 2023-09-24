import React, { useState } from 'react'
import {SlMenu} from 'react-icons/sl'
import logo from '../images/logo.jpg'
import user from '../images/user.png'
import {BiSolidChevronDown}  from 'react-icons/bi'


const Header = (props) => {
  const[showMenu ,setShowmenu]=useState(false);
  const sideBar= props.sideBar;
  const setSideBar= props.setSideBar;
 
  
  return (
    <div className='px-2 h-14 bg-gray-200 shadow-sm shadow-gray-500 flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
             <div className='text-3xl text-center cursor-pointer font-bold'>
               <SlMenu onClick={()=>{setSideBar(!sideBar)}} /></div>
       
             <img className='h-10 w-20' src={logo}/> 
        </div>
        
        <div className='hidden md:block'>
          <ul className='flex space-x-4 text-lg font-bold text-blue-900  '>
            <li className='cursor-pointer hover:scale-x-110  hover:bg-gray-200 rounded-xl px-3   '>Profile Search</li>
            <li className='cursor-pointer hover:scale-x-110  hover:bg-gray-200 rounded-xl px-3   '> Top Questions</li>
            <li className='cursor-pointer hover:scale-x-110  hover:bg-gray-200 rounded-xl px-3   '> Quizess</li>
            <li className='cursor-pointer hover:scale-x-110  hover:bg-gray-200 rounded-xl px-3   '> Interviewer</li>
            <li className='cursor-pointer hover:scale-x-110  hover:bg-gray-200 rounded-xl px-3   '>Resume</li>
          </ul>
        </div>
      
        
        
        <div className='flex items-center  space-x-5'>
        <div className={ `block md:hidden z-[10]  ${showMenu ? 'mt-40' : 'mt-0'}` }>
          <div className=' flex cursor-pointer  space-x-1 items-center text-xl  leading-8 text-white font-semibold px-3 bg-blue-500 rounded-xl' onClick={()=>{setShowmenu(!showMenu)}}><span className=''>Services</span>
          <span><BiSolidChevronDown/></span></div>
          {showMenu? ( <div className='px-1 text-lg mt-1  rounded-lg text-blue-600 bg-gray-300'>
          <div className=' mb-1 cursor-pointer '>Profile Serach</div>
          <div className=' mb-1 cursor-pointer '>Top Questions</div>
          <div className=' mb-1 cursor-pointer '>Interviewer</div>
          <div className=' mb-1 cursor-pointer '>Quizzes</div>
          <div className=' mb-1 cursor-pointer '>Resume</div>
          </div>):(null)}
         
          
        </div>
    
          <img src={user} className=' border border-gray-500 h-10 w-10 rounded-full'/>
            
        </div>

    </div>
  )
}

export default Header